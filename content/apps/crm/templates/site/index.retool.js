<h1>CRM</h1>
<h3>Hello {{this.name}}, welcome to the CRM application.</h3>
<br/>
<button class="btn btn-success" name="btnGetStarted" href="./calendar">Get Started</button>
==
class Index extends Template {
  
  constructor(){
    this.name = Page.username || "guest";
  }
  btnGetStarted_onclick(){
    alert('Ready to go');
  }
}