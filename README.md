# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<a name="s91jz"></a>
## 自动化测试框架
1. Jasmine
2. MOCHA
3. jest

<a name="sTTG2"></a>
## Jest 配置
<a name="mo0VA"></a>
##### 安装jest
`npm i jest -D`<br />`yarn add jest`
<a name="HSCGf"></a>
##### 生成Jest配置
`npx jest --init`
<a name="vDbc3"></a>
##### 常用Jest参数
--init   初始化 一个 jest.config.js 配置文件<br />--help 帮助信息<br />--watch 监听文件变化，并测试更改的文件的用例<br />--watchAll 监听所以文件，并测试所有文件的用例<br />--coverage 生成覆盖率<br />--debug

<a name="b4JsV"></a>
## Jest匹配器
<a name="QZLmy"></a>
##### Jest 常用的匹配器

1. toBe 类型 Object.is || ===
2. toEqual  匹配 、对象
3. toBeNull
4. toBeUnderfined
5. toBeDefined
<a name="KtA9z"></a>
#####  true false 相关的匹配器

1. toBeTruthy
2. toBeFalsy
<a name="tizzj"></a>
##### .not 匹配器
 1. not
<a name="YAruN"></a>
##### 数字相关的匹配器

1. toBeGreaterThan  比某个数字大
2. toBeLessThan 比某数字小
3. toBeGreaterThanOrEqual 比某个数字大或者相等
4. toBeLessThanOrEqual 比某个数字小或者相等
5. .toBeCloseTo  解决0.1+0.2
<a name="LsZA5"></a>
##### string 相关的匹配器

1. toMatch
<a name="ndLyF"></a>
##### Array，Set相关
.toContain
<a name="SNjcV"></a>
##### 异常
.toThrow
<a name="RGbaP"></a>
##### 
<a name="h6mif"></a>
## Jest 的钩子函数
测试用例之前执行 <br />beforeAll<br />afterAll

每次测试用例之前之前都执行一次<br />befoeEach<br />afterEach
<a name="Iy0HL"></a>
## Jest 简单Demo
sum.js
```javascript
function add(a, b) {
  return a + b;
}


export { add };
```

sum.test.js
```javascript
import { add } from "../sum";


it("测试加法：2+2 = 4", () => {
  expect(add(2, 2)).toBe(4);
});
```

<a name="cCe3j"></a>
## jest 异步代码测试
mock:
```typescript
export default {
    'GET /api/test': { name: 'foo' }
}
```

js:
```typescript
function fetchData() {
    return axios('http://localhost:8000/api/test');
}
```
test.js
```typescript
it('测试fetchData', async () => {
await fetchData().then(data=>console.log(data));
    await expect(fetchData()).resolves.toMatchObject({
        data: {
            name: 'foo'
        }
    })
});
```
<a name="dNyqg"></a>
## Jest Mock

1. const func = jest.fn();  捕获函数的调用和返回结果
2. func.mockReturnValueOnce('dell') 可以自己设置返回结果
3. func.mockReturnValue('dell')
4. log(func.mock)
<a name="AvhJK"></a>
###### demo:
js:
```typescript
function returnCallBack(fn: Function) {
    fn();
}
```
test.js
```typescript
it('测试returnCallBack', async () => {
    const func = jest.fn();
    returnCallBack(func);
    expect(func).toBeCalled();
    expect(func.mock.calls.length).toBe(1);


    const mockFn = jest.fn();
    mockFn.mockImplementation(() => 36 );
    returnCallBack(mockFn);
    expect(mockFn.mock.results[0].value).toEqual(36)
});
```

<a name="OjaOG"></a>
##### mock timers 时间Mock

1. jest.useFakeTimers();
2. jest.runAllTimes();
3. jest.advancedTimersByTime(3000) 快进时间

<a name="GRBRM"></a>
###### demo:
js:
```typescript
function timerCallBack(fn:Function){
    setTimeout(()=>{
        fn()
    },3000);
}
```
test.js
```typescript
jest.useFakeTimers();
it('timerCallBack', async () => {
    const func = jest.fn();
    timerCallBack(func);
    jest.advanceTimersByTime(3000);
    expect(func).toHaveBeenCalledTimes(1);
});
```

<a name="JM03D"></a>
## Jest 快照
.toMatchSnapshot()
<a name="OKDQ0"></a>
###### demo
js:
```typescript
export const config = () => {
    return {
        port: 80,
        hot: true,
        server: '123'
    }
}
```
test.js
```typescript
it('测试快照 config ', () => {
    expect(config()).toMatchSnapshot();
});
```

<a name="hyMXb"></a>
###### 更新快照：

--watch 模式 按 u 更新快照
<a name="D2C6x"></a>
## Jest --watch 模式下功能
--watch 模式下<br /> 按w 进入<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22050875/1678155213854-743abbaa-87f6-4171-af08-12092da765a4.png#averageHue=%23292e36&clientId=ud319fa04-df8a-4&from=paste&height=153&id=udb839be1&name=image.png&originHeight=229&originWidth=995&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=14954&status=done&style=none&taskId=ua64266d4-1d4d-45b4-84ce-83730ff4b64&title=&width=663.3333333333334)
<a name="zwIv1"></a>
## @testing-library/react
<a name="UptAs"></a>
##### 安装库
@testing-library/react   版本 12.1.5 配合 react 17
<a name="YmHFN"></a>
##### 单元素：

1. getBy...：返回查询的匹配节点，如果没有匹配的元素_或_找到多个匹配项（ getAllBy如果需要多个元素，则改为使用），则抛出描述性错误
2. queryBy...：返回查询的匹配节点，null如果没有元素匹配则返回。这对于断言不存在的元素很有用。如果找到多个匹配项，则抛出错误（queryAllBy如果可以，请改用）
3. findBy...：返回一个 Promise，当找到与给定查询匹配的元素时解析该 Promise。如果未找到任何元素或在默认超时 1000 毫秒后找到多个元素，则承诺将被拒绝。如果您需要查找多个元素，请使用findAllBy

<a name="gvJSZ"></a>
##### 多元素

1. getAllBy...：返回查询的所有匹配节点的数组，如果没有元素匹配则抛出错误
2. queryAllBy...：返回查询的所有匹配节点的数组，[]如果没有元素匹配则返回空数组（）
3. findAllBy...：返回一个Promise，当找到与给定查询匹配的任何元素时，该承诺将解析为一个元素数组。如果在默认超时 ms 后未找到任何元素，则承诺将被拒绝1000。
- findBygetBy*方法是查询和 的组合[waitFor](https://testing-library.com/docs/dom-testing-library/api-async#waitfor)。他们接受 waitFor选项作为最后一个参数（即 await screen.findByText('text', queryOptions, waitForOptions)
<a name="Zn8qS"></a>
##### 常用query
<a name="PnaTB"></a>
###### 按角色
getByRole<br />queryByRole    at Object.<anonymous><br />getAllByRole<br />queryAllByRole<br />findByRole  返回是pending<br />findAllByRole
<a name="Dc9Ai"></a>
###### 按标签文本
getByLabelText<br />queryByLabelText<br />getAllByLabelText<br />queryAllByLabelText<br />findByLabelText<br />findAllByLabelText
<a name="GS5gm"></a>
###### 按占位符文本
getByPlaceholderText<br />queryByPlaceholderText<br />getAllByPlaceholderText<br />queryAllByPlaceholderText<br />findByPlaceholderText<br />findAllByPlaceholderText
<a name="pSAJJ"></a>
###### 按文本
getByText<br />queryByText<br />getAllByText<br />queryAllByText<br />findByText<br />findAllByText
<a name="OXwNO"></a>
###### 按显示值
getByDisplayValue<br />queryByDisplayValue<br />getAllByDisplayValue<br />queryAllByDisplayValue<br />findByDisplayValue<br />findAllByDisplayValue
<a name="CO1Mn"></a>
###### 按替代文本
getByAltText<br />queryByAltText<br />getAllByAltText<br />queryAllByAltText<br />findByAltText<br />findAllByAltText
<a name="Np933"></a>
###### 按标题
getByTitle<br />queryByTitle<br />getAllByTitle<br />queryAllByTitle<br />findByTitle<br />findAllByTitle
<a name="IsM2y"></a>
###### 按TestId
getByTestId<br />queryByTestId<br />getAllByTestId<br />queryAllByTestId<br />findByTestId<br />findAllByTestId
<a name="pUQDL"></a>
##### 常用操作fireEvent
![](https://cdn.nlark.com/yuque/0/2023/png/22050875/1678073920011-32280b03-4f68-473b-b50d-096efc364b71.png#averageHue=%232b3042&from=url&id=wgRr8&originHeight=248&originWidth=601&originalType=binary&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&title=)

1. fireEvent.click 点击
2. fireEvent.change 输入
3. fireEvent.drop 拖动
4. ireEvent.keyDown 键盘事件
5. createEvent 自定义事件
<a name="GpkIz"></a>
##### 异步方法
<a name="Uc4Zj"></a>
###### findBy  getBy
<a name="d7YDU"></a>
###### ![image.png](https://cdn.nlark.com/yuque/0/2023/png/22050875/1678074360535-23c6a904-c2e8-4cb7-92fe-54f765a264c4.png#averageHue=%232d3245&clientId=u9be5bb5a-41b6-4&from=paste&height=107&id=u9b02445e&name=image.png&originHeight=161&originWidth=928&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=30506&status=done&style=none&taskId=u3998a294-9950-4f86-9110-ab07c01706e&title=&width=618.6666666666666)
<a name="ZCQTU"></a>
###### waitFor
<a name="UFpti"></a>
###### ![image.png](https://cdn.nlark.com/yuque/0/2023/png/22050875/1678074397557-a5566d4e-20f8-4514-b5a1-bf3e9dba3911.png#averageHue=%232c3244&clientId=u9be5bb5a-41b6-4&from=paste&height=206&id=u7bdac935&name=image.png&originHeight=309&originWidth=871&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=30775&status=done&style=none&taskId=uf6a13f20-eedf-4ff0-ade4-89bd55dc785&title=&width=580.6666666666666)
<a name="C8Oiv"></a>
###### ![image.png](https://cdn.nlark.com/yuque/0/2023/png/22050875/1678074384434-70f6a39e-ad3c-4789-8db1-d6fbda03af95.png#averageHue=%232c3144&clientId=u9be5bb5a-41b6-4&from=paste&height=107&id=ue641916f&name=image.png&originHeight=160&originWidth=1029&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=29421&status=done&style=none&taskId=udce446ad-bf21-49dc-862d-fcc371940f8&title=&width=686)
<a name="UiB7L"></a>
###### waitForElementToBeRemoved
要等待从 DOM 中删除元素，您可以使用 waitForElementToBeRemoved. 该waitForElementToBeRemoved函数是实用程序的一个小包装器waitFor。

<a name="ToXZY"></a>
## @testing-library/jest-dom
<a name="NKO7h"></a>
##### 安装
@testing-library/jest-dom
<a name="yFN1d"></a>
#####   匹配器
toBeDisabled <br />toBeEnabled <br />toBeEmptyDOMElement<br />toBeInTheDocument <br />toBeInvalid<br />toBeRequired <br />toBeValid<br />toBeVisible<br />toContainElement<br />toContainHTML<br />toHaveAccessibleDescription<br />toHaveAccessibleName<br />toHaveAttribute<br />toHaveClass<br />toHaveFocus<br />toHaveFormValues <br />toHaveStyle<br />toHaveTextContent<br />toHaveValue<br />toHaveDisplayValue<br />toBeChecked<br />toBePartiallyChecked<br />toHaveErrorMessage

<a name="uT5Bw"></a>
## React BDD 测试
<a name="eZjqz"></a>
#### BDD

1. 先写代码再写测试
2. 集成测试
3. 测试重点在UI
4. 测试速度慢
<a name="LJUyu"></a>
###### demo
 tsx
```
import React, { useState } from 'react';
import { Button, Input } from "antd";
import styles from './index.less';


interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}


export default function IndexPage() {
  const [value, setValue] = useState<string>('');
  const [list, setList] = useState<string[]>([]);


  const onChange = (e: InputChangeEvent): void => {
    setValue(e.target.value);
  };


  const addItem = (): void => {
    if (value) {
      const newList = [...list, value];
      setList(newList);
      setValue('');
    }
  };


  return (
    <>
      <div className={styles.head}>
        <Input type="text" value={value} onChange={onChange} role="input" />
        <Button type="primary" onClick={addItem} role="button">添加</Button>
      </div>
      <div className="list">
        {list.map((item, index) => (
          <div className="listItem" key={index} role="listItem">
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
```
test.tsx
```
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Todolist from '.';


it(`
1. 输入内容
2. 点击添加
3. 展示list
`, async () => {
  // 渲染组件
  render(<Todolist />);
  await fireEvent.change(screen.getByRole('input'), {
    target: { value: '学习Jest' },
  });
  await fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText(/学习Jest/i)).toBeInTheDocument();
  await fireEvent.change(screen.getByRole('input'), {
    target: { value: '学习Jest2' },
  });
  await fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText(/学习Jest2/i)).toBeInTheDocument();
  expect(screen.getAllByRole('listItem').length).toBe(2);
});
```

resule:<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/22050875/1678172387241-afe489ff-d497-41bc-a48b-41fb3e138151.png#averageHue=%23282d35&clientId=ud93cd633-b89e-4&from=paste&height=218&id=uba38c0fe&name=image.png&originHeight=273&originWidth=1042&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=22467&status=done&style=none&taskId=ucc65a8f0-5975-4028-8224-a05ce0a6ce4&title=&width=833.6)
<a name="sJSal"></a>
## React TDD 测试
<a name="yqqPh"></a>
#### TDD

1. 先写测试再写代码
2. 单元测试
3. 测试重点在代码
4. 速度快


