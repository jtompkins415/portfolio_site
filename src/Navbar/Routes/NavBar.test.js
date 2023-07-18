import React from "react";
import {describe, test, expect, beforeAll} from 'vitest';
import {create} from 'react-test-renderer';
import NavBar from "./NavBar";

describe('NavBar', () => {
    
    test('loads properly in the DOM', () => {
        //Setup
        const component = create(React.createElement(NavBar))           
        //convert to JSON
        const tree = component.toJSON();
        //Verify
        expect(tree).not.toBeNull();
        expect(tree.children[0].props['className']).toBe('navlink-container')
    });

    test('links have proper section name', () => {
        //Setup
        const component = create(React.createElement(NavBar));

        const tree = component.toJSON();

        expect(tree.children[1].innerHTML).toBe('About');
        
    })
});