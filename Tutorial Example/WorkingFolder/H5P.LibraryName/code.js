var H5P = H5P || {};
 
H5P.LibraryName = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      test_text: 'Hello world!',
      test_image: null
    }, options);
    // Keep provided id.
    this.id = id;
  };
 
  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    // Add css class to the container that houses all futher H5P content
    $container.addClass("h5p-containerstyle");
    // Add image if provided.
    if (this.options.test_image && this.options.test_image.path) {
      $container.append('<img class="imagestyle" src="' + H5P.getPath(this.options.test_image.path, this.id) + '">');
    }
    // Add greeting text.
    $container.append('<div class="textstyle">' + this.options.test_text + '</div>');
  };
 
  return C;
})(H5P.jQuery);