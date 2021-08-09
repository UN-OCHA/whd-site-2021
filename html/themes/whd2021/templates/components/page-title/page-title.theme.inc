<?php

/**
 * @file
 * Hooks and functions for the Page Title paragraph type.
 */

/**
 * Implements template_preprocess_paragraph__TYPE().
 */
function whd2021_preprocess_paragraph__page_title(array &$variables) {
  // Use the helper function to produce the page title compatible with cache.
  $placeholder_title = [
    '#lazy_builder' => [
      '__whd2021_paragraphs_title_placeholder',
      ['page_title'],
    ],
    '#create_placeholder' => TRUE,
  ];
  $variables['title'] = $placeholder_title;
}

/**
 * Helper function to provide Page Title to Paragraphs.
 *
 * @see https://drupal.stackexchange.com/a/212060
 */
function __whd2021_paragraphs_title_placeholder($page_title) {
  // If you attempt to pass in $page_title from preprocess it will be cached!
  $request = \Drupal::request();
  $route_match = \Drupal::routeMatch();
  $page_title = \Drupal::service('title_resolver')->getTitle($request, $route_match->getRouteObject());

  $title_array = [
    '#markup' => $page_title,
  ];

  return $title_array;
}
