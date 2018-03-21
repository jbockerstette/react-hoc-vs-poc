The goal of this project is to write four different higher order components and then reimplement them as plain old components. By doing this I hope to show that you can get the same code re-use benefits using regular components. I also hope to show that the POC version is more explicit and more dynamic then an HOC. Regular components are easier to debug, test and reason about.

The four components are as follows:

<ul>
<li>Write an HOC/POC that reverses it’s input</li>
<li> Write an HOC/POC that supplies data from an API to it’s Passed Component</li>
<li>Write an HOC/POC that implements shouldComponentUpdate to avoid reconciliation.</li>
<li>Write an HOC/POC that uses React.Children.toArray to sort the children passed to it's Passed Component.</li>
</ul>