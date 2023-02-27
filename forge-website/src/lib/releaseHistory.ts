import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";


const postsDirectory = path.join(process.cwd(), "content/ForgeReleaseHistory");

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

export function getAllPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    }
  });
}

export async function getPostData(id:string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}