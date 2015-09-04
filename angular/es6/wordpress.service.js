'use strict';

class WordPress {
  /**
   * Set the URL
   */
  constructor ($http) {
    this.$http = $http;
    this.url = 'http://your.wordpress.site/wp-json/';
  }

  /** 
   * Get a listing of posts
   */
  get(params) {
    return this.$http({
      url: this.url + 'posts/',
      params: params
    });
  }

  /**
   * Get a single post by ID
   */
  single(id, params) {
    return this.$http({
      url: this.url + 'posts/' + id,
      params: params
    });
  }
}

WordPress.$inject = ['$http'];

export default WordPress;