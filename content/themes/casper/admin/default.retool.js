<r-stylesheet href="/retool/assets/stylesheets/bootstrap.css"></r-stylesheet>
<r-outlet href="global-nav"></r-outlet>
<div class="app-content">
  <r-body></r-body>
  <r-outlet href="{{path}}-side"></r-outlet>
  <h3>out of body</h3>
</div>
==
class Application extends Template {
  btnHello_onclick(){
    var msg = Controllers.Hello.sayHello("Retool Developer");
    alert(msg);
  }
}

==
{}