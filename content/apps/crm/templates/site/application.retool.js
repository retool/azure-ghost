<r-stylesheet href="/retool/assets/stylesheets/bootstrap.css"></r-stylesheet>
<r-stylesheet href="//fonts.googleapis.com/css?family=Open+Sans:400,300,700,600"></r-stylesheet>
<r-stylesheet href="css/site.css"></r-stylesheet>
<r-stylesheet href="css/icon.css"></r-stylesheet>
<r-stylesheet href="css/calendar.css"></r-stylesheet>
<nav class="global-nav">
  <a class="nav-item ghost-logo" href="/">
    <div class="nav-label">
      <i class="icon-ghost"></i>
      <span></span>
    </div>
  </a>
  <a class="nav-item" href="/ghost/">
    <div class="nav-label">
      <i class="icon-content"></i>
 CONTENT</div>
  </a>
  <a class="nav-item" href="/ghost/editor/">
    <div class="nav-label">
      <i class="icon-add"></i>
      <span> NEW POST</span>
    </div>
  </a>
  <a class="nav-item" href="/ghost/settings/">
    <div class="nav-label">
      <i class="icon-settings2"></i>
      <span> SETTINGS</span>
    </div>
  </a>
  <a class="nav-item active" href="site/index">
    <div class="nav-label">
      <i class="icon-home"></i>
      <span>RETOOL APPS</span>
    </div>
  </a>
  <div class="nav-item user-menu">
    <div class="nav-label clearfix closed">
      <div class="image">
        <img src="/shared/img/user-image.png"/>
      </div>
      <div class="name">{{Page.username}} 
        <i class="icon-chevron-down"></i>
      </div>
    </div>
  </div>
</nav>
<div class="app-content">
  <r-outlet name="main"></r-outlet>
</div>
==
class Application extends Template {
  btnHello_onclick(){
    var msg = Controllers.Hello.sayHello("Retool Developer");
    alert(msg);
  }
}
