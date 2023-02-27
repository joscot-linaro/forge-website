import React,{useState} from 'react';
import Typography from '@mui/material/Typography';
import {marked} from 'marked';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import moment from 'moment';

const CollapseList = ({item}) => {
    const [isExpanded,setIsExpanded]=useState(false);

    const dateFormatConvertor=(str)=>{
        const d = new Date(str);
        const convertedDate=moment(d).format('MMMM D, YYYY');
       return convertedDate;
       
    }
  return (
    <>
      <List >
        <ListItem button onClick={()=>setIsExpanded(!isExpanded)}  sx={{display:'flex',flexDirection:'row',mb:2,justifyContent:'flex-start',width:{sm:'80%',md:'35%',xs:'100%'} }}>
          {isExpanded ? <RemoveSharpIcon style={{color:'#2596be'}}  /> :<AddSharpIcon style={{color:'#2596be'}} />}
          <ListItemText primary={item.frontmatter.title} />
          <ListItemText sx={{color:'#2596be',}} primary={dateFormatConvertor(item.frontmatter.date)} />
       </ListItem>
       <Collapse in={isExpanded} timeout="auto" unmountOnExit>
       <List component="div" disablePadding>
       <Typography dangerouslySetInnerHTML={{ __html: marked(item.content) }} />
        </List>
        </Collapse> 
      </List>   
    </>
  )
}

export default CollapseList