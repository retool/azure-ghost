<r-stylesheet href="css/screen.css"></r-stylesheet>
<r-stylesheet href="css/retool.css"></r-stylesheet>
<div class="app-content">
  <h1>Server Default</h1>
  <r-body></r-body>
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