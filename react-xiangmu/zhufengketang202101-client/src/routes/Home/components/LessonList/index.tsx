
import React from 'react';
import './index.less';
import Lesson from '@/typings/lesson';
import {Link} from 'react-router-dom'
import { MenuOutlined } from '@ant-design/icons';
import {Lessons} from '@/store/reducers/home';
import {Card,Skeleton,Button,Alert} from 'antd';
interface Props{
    lessons:Lessons,
    getLessons:any
}
function HomeSliders(props: Props) {
    React.useEffect(()=>{
        if(props.lessons.list.length === 0){//如果传过来的课程列表为空
            props.getLessons();//请求加载一次
        }
    },[]);
   return (
       <section className="lesson-list">
        <h2><MenuOutlined/>全部课程</h2>
        <Skeleton
           loading={props.lessons.list.length === 0 && props.lessons.loading}
           active
           paragraph={{rows:8}} 
        >
         {
            props.lessons.list.map((lesson:Lesson,index:number)=>(
                <Link key={lesson.id} to={{pathname:`/detail/${lesson.id}`,state:lesson}}>
                    <Card hoverable={true} style={{width:'100%'}} 
                        cover={<img src={lesson.poster}/>}
                    >
                        <Card.Meta title={lesson.title} description={`价格:¥${lesson.price}元`}/>
                    </Card>
                </Link>
            ))
          }
          {
              props.lessons.hasMore?(
                  <Button onClick={props.getLessons} loading={props.lessons.loading} type="primary" block>{props.lessons.loading?'':'加载更多'}</Button>
              ):(<Alert style={{textAlign:'center'}} message='我是有底线的' type='warning'/>)
          }
        </Skeleton>
        
       </section>
   )     
}
export default HomeSliders;