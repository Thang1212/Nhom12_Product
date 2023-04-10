export function arrayFormat(value) {
    let temp = "[";
    let valueLength = value.length;
    for (var i = 0; i < valueLength; ++i) {
        temp += "'" + value[i] + "'";
        if (i < valueLength - 1)
            temp += ",";
    }
    temp += "]";

    return temp;
}

export default function html([first, ...strings], ...values) {
    return values.reduce((acc, curr) => acc.concat(curr, strings.shift()), [first])
        .filter(x => x && x !== true || x === 0)
        .join('');
}

export function createStore(reducer) {
    let state = reducer();
    let roots = new Map();

    function render() {
        for (const [root, component] of roots) {
            const output = component();
            root.innerHTML = output;
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component);
            render();
        },

        connect(selector = state => state) {
            return component => (props, ...args) =>
                component(Object.assign({}, props, ...args, selector(state)))
        },

        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        }
    }
}
