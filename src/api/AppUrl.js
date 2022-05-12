class AppUrl {
  static BaseURL = 'http://127.0.0.1:8000/api';
  static VisitorDetails = this.BaseURL + '/get-visitor';
  static PostContact = this.BaseURL + '/post-contact';
  static AllSiteInfo = this.BaseURL + '/all-site-info';
  static AllCategoryDetails = this.BaseURL + '/all-category';

  static ProductListByRemark(Remark) {
    return this.BaseURL + '/productlistbyremark/' + Remark;
  }

  static ProductListByCategory(category) {
    return this.BaseURL + '/productlistbycategory/' + category;
  }

  static ProductListBySubCategory(category, subcategory) {
    return (
      this.BaseURL + '/productlistbysubcategory/' + category + '/' + subcategory
    );
  }

  static AllSlider = this.BaseURL + '/all-slider';

  static ProductDetails(code) {
    return this.BaseURL + '/product-details/' + code;
  }
  static NotificationHistory = this.BaseURL + '/notification';

  static ProductBySearch(searchkey) {
    return this.BaseURL + '/search/' + searchkey;
  }

  static UserLogin = this.BaseURL + '/login';
  static UserData = this.BaseURL + '/user';

  static UserRegister = this.BaseURL + '/register';
}

export default AppUrl;
