import React, { useState, useEffect, useRef, Fragment, forwardRef, Children } from 'react';

export function CenterToggleContainer(props) {
    let itemChild, childrenChild;
    const [boundingBox, setBoundingBox] = useState({
        top: 0,
        left: 0,
        height: 0,
        width: 0,
        itemHeight: 0,
        itemWidth: 0
    });
    const childrenRef = useRef(null);
    const itemRef = useRef(null);

    for (const child of props.children) {
        if (child.type === CenterToggleItem) {
            itemChild = child;
        } else if (child.type === CenterToggleChild) {
            childrenChild = child;
        } else {
            if (process.env.NODE_ENV !== 'production') {
                console.error("CenterToggleContainer can only have two children of type 'CenterToggleItem' and 'CenterToggleChild'.");
            }

            throw new Error("CenterToggleContainer can only have two children of type 'CenterToggleItem' and 'CenterToggleChild'.");
        }
    }

    useEffect(() => {
        if (childrenRef.current) {
            const resizeObserver = new ResizeObserver(update);

            resizeObserver.observe(childrenRef.current);
        }
    }, [childrenRef]);

    useEffect(() => {
        if (itemRef.current) {
            const resizeObserver = new ResizeObserver(update);

            resizeObserver.observe(itemRef.current);
        }
    }, [itemRef]);

    useEffect(() => {
        update();
    }, [childrenRef, itemRef]);

    function update() {
        if (childrenRef.current && itemRef.current) {
            boundingBox.height = childrenRef.current.offsetHeight;
            boundingBox.width = childrenRef.current.offsetWidth;
            boundingBox.top = childrenRef.current.offsetTop;
            boundingBox.left = childrenRef.current.offsetLeft;

            if (itemRef.current.offsetHeight !== 0 && itemRef.current.offsetWidth !== 0) {
                boundingBox.itemHeight = itemRef.current.offsetHeight;
                boundingBox.itemWidth = itemRef.current.offsetWidth;
            }

            setBoundingBox({ ...boundingBox });
        }
    }

    return (
        <Fragment>
            <itemChild.type {...itemChild.props} toggled={props.toggled} boundingBox={boundingBox} ref={itemRef} />
            <childrenChild.type {...childrenChild.props} ref={childrenRef} />
        </Fragment>
    );
}

export const CenterToggleItem = forwardRef((props, ref) => {
    const { top, left, height, width, itemHeight, itemWidth } = props.boundingBox;
    return (
        <div ref={ref} style={{ position: 'absolute', top: top + height / 2 - itemHeight / 2, left: left + width / 2 - itemWidth / 2, visibility: itemHeight === 0 && itemWidth === 0 ? 'hidden' : 'visible' }} >
            {(props.toggled || (itemHeight === 0 && itemWidth === 0)) && props.children}
        </div>
    );
});

export const CenterToggleChild = forwardRef((props, ref) => {
    let child;
    try {
        child = Children.only(props.children);
    } catch (err) {
        console.error(err);
        throw err;
    }

    return (
        <child.type ref={ref} {...child.props} />
    );

});