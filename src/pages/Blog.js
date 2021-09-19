import React from 'react';
import Header from "./Header";
import Description from './Description';

function Blog() {
    return (
        <>
            <Header />
            <Description title="Blog." subtitle="Posts, tutorials, snippets, musings, notes, and everything else. The archive of everything I've written." />
        </>
    );
}
export default Blog;