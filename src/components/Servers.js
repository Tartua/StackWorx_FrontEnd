import React, { Component } from 'react';
import ServerOther from './Images/ServerOther.jpg';
import ServerOnline from './Images/ServerOnline.jpg';
import ServerOffline from './Images/ServerOffline.png';

//function to change the squares to show server status(need to get response parameter in the httpRequestCheck to here)
function serverStatus(test) {
    if (test === 'http://httpstat.us/200'){
        return ServerOnline
    }else {
        return ServerOffline
    }
}

// function to get server health check endpoints
const HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        const anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200) {
                aCallback(anHttpRequest.responseText);
            }
        }
        anHttpRequest.open('GET', aUrl, true);
        anHttpRequest.send(null);
    }
};
function httpRequestCheck(html) {
    const theUrl = html;
    const client = new HttpClient();
    client.get(theUrl, function (response) {
        //get the response parameter out of this function to use in changing server status and to check last response

    })
}

//function to display the last response payload(need response parameter form httpRequestCheck)
function ping(html) {
    return 'Display last response payload'
}

//function to display the last response payload
function display(element) {
    let x;
    x = document.getElementById(element);
    if (x.hidden === true) {
        x.hidden = false
    } else {
        x.hidden = true
    }
}
//main Class iterates through the states array to display all the servers
class Servers extends Component {
    render() {
        return <div>
            {this.props.serverStats.map((server) =>(
                <div>
                    <input type={'image'} src={serverStatus(server.html)} id={server.html} alt={'Image not Available'} onClick={() => display(server.id)}/>
                    {server.title}
                    <p id={server.id} hidden={true}>{ping()}</p>
                </div>
            ))}
               </div>;
    }
}
export default Servers;
