import React, { useState, useEffect, useRef, createRef, Fragment, forwardRef, Children } from 'react';

export function CenterToggleContainer(props) {
    let itemChild, childrenChild;
    const [boundingBoxTop, setBoundingBoxTop] = useState(0);
    const [boundingBoxLeft, setBoundingBoxLeft] = useState(0);
    const [boundingBoxHeight, setBoundingBoxHeight] = useState(0);
    const [boundingBoxWidth, setBoundingBoxWidth] = useState(0);
    const [itemHeight, setItemHeight] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const childrenRef = useRef(null);
    const itemRef = createRef(null);

    for (const child of props.children) {
        if (child.type === CenterToggleItem) {
            itemChild = child;
        } else if (child.type === CenterToggleChild) {
            childrenChild = child;
        } else {
            console.error("CenterToggleContainer can only have two children of type 'CenterToggleItem' and 'CenterToggleChild'.");
            throw new Error("CenterToggleContainer can only have two children of type 'CenterToggleItem' and 'CenterToggleChild'.");
        }
    }

    useEffect(() => {
        if (childrenRef.current && itemRef.current) {
            setBoundingBoxHeight(childrenRef.current.offsetHeight);
            setBoundingBoxWidth(childrenRef.current.offsetWidth);
            setBoundingBoxTop(childrenRef.current.offsetTop);
            setBoundingBoxLeft(childrenRef.current.offsetLeft);

            if (itemRef.current.offsetHeight !== 0 && itemRef.current.offsetWidth !== 0) {
                setItemHeight(itemRef.current.offsetHeight);
                setItemWidth(itemRef.current.offsetWidth);
            }
        }
    }, [childrenRef, itemRef]);

    return (
        <Fragment>
            <itemChild.type {...itemChild.props} toggled={props.toggled} boundingBox={{ boundingBoxTop, boundingBoxLeft, boundingBoxHeight, boundingBoxWidth, itemHeight, itemWidth }} ref={itemRef} />
            <childrenChild.type {...childrenChild.props} ref={childrenRef} />
        </Fragment>
    );
}

export const CenterToggleItem = forwardRef((props, ref) => {
    const { boundingBoxTop, boundingBoxLeft, boundingBoxHeight, boundingBoxWidth, itemHeight, itemWidth } = props.boundingBox;
    return (
        <div ref={ref} style={{ position: 'absolute', top: boundingBoxTop + boundingBoxHeight / 2 - itemHeight / 2, left: boundingBoxLeft + boundingBoxWidth / 2 - itemWidth / 2, visibility: itemHeight === 0 && itemWidth === 0 ? 'hidden' : 'visible' }} >
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