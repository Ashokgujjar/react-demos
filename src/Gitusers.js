import React, { PureComponent } from 'react';
import './App.css';
import axios from 'axios';

class Gitusers extends PureComponent {

  constructor() {
    super();
    this.timer = null;
    this.state = { query: '', data: [] };

    [
      "getInfo",
      "_handleChange",
    ].forEach((fn) => this[fn] = this[fn].bind(this));
  }

  async getInfo() {
    const { query } = this.state;
    const { data: { items = [] } } = await axios.get(`https://api.github.com/search/users?q=${query}`);
    this.setState({ data: items });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.getInfo, 500);
    }
  }

  _handleChange(e) {
    this.setState({ query: e.target.value })
  }

  _calcCount(query) {
    query = query || this.state.query;
    return (query).length;
  }

  render() {
    const { query, data } = this.state;
    const len = this._calcCount(query);

    return (
      <div>
        <p>len: {len}</p>
        <input
          placeholder="Git Username..."
          value={query}
          onChange={this._handleChange}
        />
        <ul>
          {(data || []).map(({ login }, i) => {
            return (
              <li key={i}>
                {login}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Gitusers;
