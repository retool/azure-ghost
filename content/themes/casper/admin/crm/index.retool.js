<h1>CRM - Sub Folder</h1>
<r-partial template="hello-msg"></r-partial>
<br/>
<button class="btn btn-success" name="btnGetStarted" href="./calendar">Get Started</button>
<button class="btn btn-default" name="btnHello">Say Hello</button>
==
class Index extends Template {
  
  constructor(){
    this.name = Page.username || "guest";
  }
  
  btnGetStarted_onclick(){
    alert('Ready to go');
  }

  btnHello_onclick(){
    alert(Api.Hello.sayHello(Page.username));
  }
}