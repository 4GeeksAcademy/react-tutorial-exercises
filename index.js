import React from 'react';
import ReactDOM from 'react-dom';
import  Loadable  from 'react-loadable';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import bc from './bc.json';
import styles from './styles.scss';
import Readme from './README.md';
import 'highlight.js/styles/monokai-sublime.css';
import Typography from 'typography'
import altonTheme from 'typography-theme-alton';
altonTheme.baseFontSize = "16px";
const typography = new Typography(altonTheme);
typography.injectStyles();

const Link = ({onClick, slug, children}) => (<a href={"#"+slug}>{children}</a>);
const Loading = () => (<div>Loading</div>);
class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
            current: null,
            slug: null,
            exercises: bc.exercises,
            getIndex: (slug) => {
                for(let i=0; i<this.state.exercises.length; i++)
                    if(this.state.exercises[i].slug == slug) return i;
                    
                return false;
            },
            next: () => {
                const i = this.state.getIndex(this.state.slug)+1;
                if(typeof(bc.exercises[i]) != 'undefined') return bc.exercises[i];
                else return null;
            },
            previous: () => {
                const i = this.state.getIndex(this.state.slug)-1;
                if(typeof(bc.exercises[i]) != 'undefined') return bc.exercises[i];
                else return null;
            },
            iframeURL: `${C9_PUBLIC_URL}:8080`
        }
    }
    componentDidMount(){
        window.addEventListener("hashchange", () => this.loadInstructions());
        if(window.location.hash && window.location.hash!='#') this.loadInstructions();
    }
    loadInstructions(slug=null){
        if(!slug) slug = window.location.hash.slice(1,window.location.hash.length);
        if(slug=='' || slug=='/') this.setState({ current: null, slug });
        else{
            this.setState({
                current: Loadable({
                  loader: () => import('./exercises/'+slug+'/README.md'),
                  loading: Loading
                }),
                slug
            });
        }
    }
    refresh(){
        const url = this.state.iframeURL;
        this.setState({ iframeURL: '' });
        setTimeout(() => this.setState({ iframeURL: url }), 1000);
    }
    render(){
        const styles = {
            padding: "10px"
        }
        const Current = this.state.current;
        const exercisesHTML = this.state.exercises.map(ex => (
            <li key={ex.slug}>
                <Link slug={ex.slug}>
                    {ex.title}
                </Link>
            </li>
        ));
        const rotateClass = this.state.iframeURL == '' ? 'rotate':'';
        return (<div>
            <div className="split left">
                <div className="alert">
                    <button className={"refresh "+rotateClass} type="button" onClick={() => this.refresh()}><i className="fas fa-sync-alt"></i></button>
                    <p>This window will automatically refresh every time you update your exercise code</p>
                    <p>If you cannot see your live exercise here, run <code className="language-shell">$ bc run:exercise -n={'<exercise_number>'}</code></p>
                </div>
                <Iframe url={this.state.iframeURL}
                    width="100%"
                    height="calc(100vh - 90px)"
                    display="initial"
                    onLoad={(e) => {
                        //let doc = e.target.contentDocument ? e.target.contentDocument : e.target.contentWindow.document;
                        console.log("loaded: ",e);
                    }}
                    allowFullScreen
                />
            </div>
            
            <div className="split right">
                {(Current) ? 
                    <div style={styles}>
                        <div className="prev-next-bar">
                            {(this.state.previous()) ? <a className="prev-exercise" href={"#"+this.state.previous().slug}>Previous</a>:''}
                            {(this.state.next()) ? <a className="next-exercise" href={"#"+this.state.next().slug}>Next</a>:''}
                        </div>
                        <Current />
                    </div>
                    :
                    <Instructions title={bc.title}>{exercisesHTML}</Instructions>
                }
            </div>
        </div>)
        
        
    }
};
const Instructions = ({title, children}) => {
    return (<div>
        <Readme />
        <h2>Ok, enough with the reading! :)</h2>
        <p>Click on any of the following exercises to read its instructions:</p>
        <ol>{children}</ol>
    </div>);
}
ReactDOM.render(<Layout />,document.querySelector('#myDiv'));