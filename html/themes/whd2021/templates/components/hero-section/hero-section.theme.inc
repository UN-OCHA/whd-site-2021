<?php

/**
 * @file
 * Hooks and functions for the Hero Section paragraph type.
 */

use Drupal\image\Entity\ImageStyle;

/**
 * Implements template_preprocess_paragraph__TYPE().
 *
 * Generate image styles for Hero Sections.
 *
 * Since the image is dynamic and must appear as a raw URL, but we want to
 * provide several images with some level of responsiveness, we generate the
 * additional image styles here.
 */
function whd2021_preprocess_paragraph__hero_section(array &$variables) {
  $paragraph = $variables['paragraph'];

  // Generate image styles.
  $photo_uri = $paragraph->field_photo->entity->getFileUri();
  $original_url = file_url_transform_relative(file_create_url($photo_uri));
  $sm_url = ImageStyle::load('640w')->buildUrl($photo_uri);
  $med_url = ImageStyle::load('1024w')->buildUrl($photo_uri);

  // Expose to Twig.
  $variables['photo_original'] = $original_url;
  $variables['photo_sm'] = $sm_url;
  $variables['photo_md'] = $med_url;
}
