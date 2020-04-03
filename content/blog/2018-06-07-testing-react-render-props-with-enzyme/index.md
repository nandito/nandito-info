---
title: Testing React render props with Enzyme
date: "2018-06-07T18:50:00.000Z"
description: ""
cover: "pexels-photo-247599.jpeg"
---

In React 16.3.0 they [announced](https://reactjs.org/blog/2018/03/29/react-v-16-3.html) the new, official context API as a replacement of the previous, experimental one. Here, the context consumer requires function as a child to use values from the context. Testing these consumers seemed a bit tricky but here's a workaround to do that.

In the examples I use Jest with Enzyme to test an app created by [Create React App](https://github.com/facebook/create-react-app). The official documentation has a [step-by-step guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components) how to set up these framework easily.

## The problem

When we have a render prop in the shallow rendered React component test, we cannot see its name.

So when we have this in the Header component:

```js
const Header = () => (
  <Consumer>
    {({ language }) => (
      <header>
        <h1>{dictionary['GREETING'][language]}</h1>
      </header>
    )}
  </Consumer>
)
```

this in the test:

```js
describe('Header', () => {
  it('renders the Header', () => {
    const wrapper = shallow(<Header />)

    console.log(wrapper.debug())
  })
})
```

we get this as a result:

```js
<[object Object]>
  <undefined />
</[object Object]>
```

Neither find() nor findWhere() functions work here as currently they cannot get the header or h1 tags in this state.

## A solution

When we use render props, the wrapped component will be the result of the wrapper's children prop function and it gets some values as a parameter. In the preceding example the consumer passes an object with the language code to the header to show the greeting in the current language.

When we need to test this children prop, we can do that by getting and rendering it again:

```js
it('renders the Header', () => {
  const outer = shallow(<Header />)
  const Children = outer.prop('children')
  const wrapper = shallow(<Children />)

  console.log(wrapper.debug())
})
```

Here, the output shows the correct element names:

```js
<header>
  <h1 />
</header>
```

Now we can use the Enzyme's `find()` function to write some tests and make sure the Header component always works.

```js
it('renders the Header', () => {
  const outer = shallow(<Header />)
  const Children = outer.prop('children')
  const wrapper = shallow(<Children />)

  expect(wrapper.find('header')).toHaveLength(1)
  expect(wrapper.find('h1')).toHaveLength(1)
})
```

It is working! Now we can be sure that our Header component will always have header and h1 tags in the future - or else this test will fail.

## Testing the passed values

The h1 tags do not render any value in this current state because there is no value passed by the consumer. Luckily we can also manipulate this passed value directly from our test.

```js
it('renders the title on the proper language', () => {
  const outer = shallow(<Header/>)
  const Children = outer.prop('children')
  const wrapper = shallow(<Children language="en"/>)

  console.log(wrapper.debug())
})
```

Now as we can see in the console, heading tag gets value:

```js
<header>
  <h1>
    Hello World!
  </h1>
</header>
```

Let's write some test expectations to make sure it works in the future:

```js
it('renders the title on the proper language', () => {
  const outer = shallow(<Header/>)
  const Children = outer.prop('children')
  const wrapper = shallow(<Children language="en"/>)

  expect(wrapper.find('h1').text()).toBe(dictionary['GREETING']['en'])
  expect(wrapper.find('h1').text()).toBe('Hello World!')
})
```

In the snippet above you may prefer to expect the rendered translated text defined as a reference to the dictionary (`dictionary['GREETING']['en']`) or as a string (`'Hello World!'`). If you use the former, your test won't break when someone updates the dictionary, while the latter will do.

This way we test that:

Header component does not crash
It renders all the expected tags: header and h1
It uses the value it gets from the context

I'm not sure if this is the best way to test components with the new context API. But currently it is good enough to make sure my components work as expected.

If we have several components using the context consumer, it is a good practice to create a helper function for the tests. Here's an example:

```js
export const shallowRenderProps = (Component, injectedProps) => {
  const outer = shallow(Component)
  const Children = outer.prop('children')
  const childrenWrapper = shallow(<Children{...injectedProps}/>)
  const wrapper = childrenWrapper.shallow()

  return wrapper
}
```

Now we can render the Heading components in the test like this:

```js
it('renders the title on the proper language', () => {
  const wrapper = shallowRenderProps(<Header/>,{language:'en'})

  expect(wrapper.find('h1').text()).toBe(dictionary['GREETING']['en'])
  expect(wrapper.find('h1').text()).toBe('Hello World!')
})
```

[You can find the code on GitHub](https://github.com/nandito/react-test).
