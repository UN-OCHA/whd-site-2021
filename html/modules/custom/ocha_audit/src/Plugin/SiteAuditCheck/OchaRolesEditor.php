<?php

namespace Drupal\ocha_audit\Plugin\SiteAuditCheck;

use Drupal\site_audit\Plugin\SiteAuditCheckBase;

/**
 * Provides the OchaRolesEditor Check.
 *
 * @SiteAuditCheck(
 *  id = "ocha_roles_editor",
 *  name = @Translation("OCHA Editor role"),
 *  description = @Translation("Confirm that an Editor role exists."),
 *  report = "users"
 * )
 */
class OchaRolesEditor extends SiteAuditCheckBase {

  /**
   * {@inheritdoc}.
   */
  public function getResultFail() {
    return $this->t('Editor role was not found!');
  }

  /**
   * {@inheritdoc}.
   */
  public function getResultInfo() {}

  /**
   * {@inheritdoc}.
   */
  public function getResultPass() {
    return $this->t('Editor role was found.');
  }

  /**
   * {@inheritdoc}.
   */
  public function getResultWarn() {}

  /**
   * {@inheritdoc}.
   */
  public function getAction() {
    if ($this->score != SiteAuditCheckBase::AUDIT_CHECK_SCORE_PASS) {
      return $this->t('Create Editor role with machine name "editor"');
    }
  }

  /**
   * {@inheritdoc}.
   */
  public function calculateScore() {
    $query = \Drupal::database()->select('user__roles');
    $query->addExpression('COUNT(entity_id)', 'count');
    $query->addfield('user__roles', 'roles_target_id', 'name');
    $query->groupBy('name');
    $query->orderBy('name', 'ASC');
    $results = $query->execute();
    while ($row = $results->fetchObject()) {
      $this->registry->roles[$row->name] = $row->count;
    }

    if ($this->registry->roles['editor'] > 0) {
      return SiteAuditCheckBase::AUDIT_CHECK_SCORE_PASS;
    }
    return SiteAuditCheckBase::AUDIT_CHECK_SCORE_FAIL;
  }
}
