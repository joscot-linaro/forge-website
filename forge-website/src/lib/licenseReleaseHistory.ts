import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/LicenceServerReleasehistory");

export  function getSortedPostsData() {
  const files=fs.readdirSync(postsDirectory);
  const posts=files.map(fileName=>{
    const slug=fileName.replace('.md','')
     const markdownWithMeta=fs.readFileSync(path.join(postsDirectory,fileName),'utf-8')
     const {data:frontmatter,content}=matter(markdownWithMeta);

    return {
      
        frontmatter,
        content,
        slug
     
    }
    
  })
  return posts.sort((a, b) => {
    if (a < b) {
      return 1;
    } else {
      return -1;
    }
  });

 }