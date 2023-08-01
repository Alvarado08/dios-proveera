export function sortPosts(posts, {
} = {}){
    const sortedPosts = posts.reduce((acc,post) => {
        const {date} = post.frontmatter;
        acc.push(post);
        return acc;
    },[]);
    sortedPosts.sort((a,b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    return sortedPosts;
}