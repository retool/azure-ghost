<r-property name="title">Title</r-property>
<r-property name="subtitle">Sub-Title</r-property>
<r-property name="product">Product</r-property>
<div>
  <h2>A={{this.params.product.name}}</h2>
  <h4>{{this.params.title}}</h4>
  <h5>{{this.params.subtitle}}</h5>
</div>
==
class Productlist extends Component {
  constructor(){
  }
}

==
{}