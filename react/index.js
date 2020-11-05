class React {
    static APP = null;

    static registerApp(component) {
        React.APP = component;
        React.render();
    }

    static render() {
        console.log(React.APP());
    }
}

export default React;
