<product-list title="Product List" subtitle="My Sub Title" product="{{this.product}}"></product-list>
<h1>Product {{this.product.name}}</h1>
<r-outlet href="hello-msg"></r-outlet>
<p>{{this.hello}}</p>
<br/>
<button class="btn btn-success" name="btnGetStarted" href="./calendar">Get Started</button>
<button class="btn btn-default" name="btnHello">Say Hello</button>
<button class="btn btn-default" name="btnBroken" href="broken">Broken</button>
<button class="btn btn-default" name="btnAbout" href="about">About</button>
==
class Index extends Template {
  
  constructor(){
    this.name = Page.username || "guest";
    this.product = {name:"Widget 1"};
    this.hello = Api.Hello.sayHello("anyone");
  }
  
  btnGetStarted_onclick(){
    alert('Ready to go');
  }

  btnHello1_onclick(){
    alert(Api.Hello.sayHello(Page.username));
  }

  btnHello_onclick(){
    Page.modal("hello-msg");
  }
}
==
{}