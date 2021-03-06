import React, { Component } from 'react';
import SimpleCard from '../../components/SimpleCard';
import LoginCard from '../../components/LoginCard';
import styles from './styles';
import data from '../../data/faq';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
    renderFAQ() {
        const listItems = data.map((faq, index) => {
            const output = `<h2 class="${css(styles.heading)}">` + faq.heading + `</h2>` + faq.answer;
            return (
                <div dangerouslySetInnerHTML={{__html: output}} key={index}>
                </div>
            );
        });
        return (
            <div className={css(styles.container)}>{listItems}</div>
        );
    }
    render() {
        return (
            <div>
                <SimpleCard headingStyle={styles.featuredHeading} style={styles} mainheadingStyle={styles.mainheadingStyle} heading="My Account"></SimpleCard>
                <LoginCard></LoginCard>
            </div>
        );
    }
}

export default Login;
