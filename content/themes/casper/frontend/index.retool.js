<h1>Index Page Rendered on the server</h1>
<p>{{this.hello}}</p>
<footer>This is the footer.</footer>
<a href="about">About Us</a>
<br/>
<markdown markdown="This is **some** text. [test](http://www.google.com) ~~replaced~~ this text. _what is this_

More info is needed on this line.

Whatever else you want to put into here will work just fine.

"></markdown>
==
class Index extends Template {
  constructor(){
    this.hello = Api.Hello.sayHello("public person");
    this.userProduct = "user product1";
    this.abtest = 1;
  }
}
==
{}