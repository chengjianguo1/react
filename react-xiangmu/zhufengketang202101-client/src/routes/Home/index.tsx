import React,{PropsWithChildren} from 'react';
import { connect } from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {RootState,HomeState} from '@/store/reducers';
import HomeHeader from './components/HomeHeader';
import HomeSliders from './components/HomeSliders';
import LessonList from './components/LessonList';
import actions from '@/store/actions/home';
import './index.less';
import {loadMore} from '@/utils'
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
type Prop =  PropsWithChildren<RouteComponentProps> & StateProps & DispatchProps;
function Home(props:Prop){
  const homeContainerRef = React.useRef(null);//后面用来实现上拉加载，下拉刷新，虚拟列表
  const lessonListRef = React.useRef(null);//后面用来实现上拉加载，下拉刷新，虚拟列表
  React.useEffect(()=>{
    //这个home-container这个div
    loadMore(homeContainerRef.current,props.getLessons);
  },[]);
  return (
    <>
      <HomeHeader
        currentCategory={props.currentCategory}
        setCurrentCategory={props.setCurrentCategory}
      />
      <div className="home-container" ref={homeContainerRef}>
          <HomeSliders sliders={props.sliders} getSliders={props.getSliders}/>
          <LessonList
             lessons = {props.lessons}
             getLessons = {props.getLessons}
          />
      </div>
    </>
  )
}
function mapStateToProps(state:RootState):HomeState{
  return state.home;
}
export default connect(
  mapStateToProps,actions
)(Home);