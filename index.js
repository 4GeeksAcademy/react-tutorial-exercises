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
            error: null,
            loading: false,
            running: false,
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
        this.setState({ error: null, loading: true });
        
        setTimeout(() => {
            fetch(url)
                .then(resp => {
                    if(resp.status == 404 || resp.status == 503) this.setState({ running: false, loading: false });
                    else if(resp.status > 199 && resp.status < 400) this.setState({ running: true, iframeURL: url, loading: false });
                })
                .catch(error =>  this.setState({ error: 'There was a problem loading the exercise', loading: false, running: false }));
        }, 500);
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
        const runningClass = (!this.state.running) ? 'not-running':'running';
        return (<div>
            <div className={"split left "+runningClass}>
                {(this.state.error) ?
                    <p className="alert alert-danger tc">{this.state.error}</p>
                    : (this.state.running) ?
                        <p className="alert alert-success tc">You application is running</p>
                        : ''
                }
                {(!this.state.loading) ?
                    <Preview 
                        exercise={(this.state.slug) ? this.state.slug : ''} 
                        active={this.state.running} 
                        onReload={() => this.refresh()}
                        iframeURL={this.state.iframeURL}
                    />
                    :
                    'Loading...'
                }
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

const Preview = ({ active, onReload, exercise, iframeURL }) => (<div>
    {(!active) ?
        <div className="preview-instructions">
            <h2>No exercise is running</h2>
            <p>Here is where your exercise will run live, follow these steps to preview you any exercise:</p>
            <ol>
                <li>Using your terminal, <code>cd</code> into the root directory containing all the exercises.</li>
                <li>Once inside, <code>ls</code> and you should see all the exercise directories.</li>
                <li>Run the preview server choosing the exercise you want to display: <br /> <code>$ bc run:exercise -n={exercise.substring(0,2)}</code></li>
                <li>After the server finishes loading, <button className="btn btn-default" onClick={() => onReload()}>click here</button> to reload this website</li>
            </ol>
        </div>
        :
        <div>
            <Iframe url={iframeURL}
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
    }
</div>);
const Instructions = ({title, children}) => {
    return (<div>
        <Readme />
        <h2>Ok, enough with the reading! :)</h2>
        <p>Click on any of the following exercises to read its instructions:</p>
        <ol>{children}</ol>
    </div>);
}
ReactDOM.render(<Layout />,document.querySelector('#myDiv'));