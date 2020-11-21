import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div>
                    NO.OF ITEMS:{this.props.length}
                </div>
                <div>
                    FILTER:{" "}
                    <select name="filter" value={this.props.sort} onChange={this.props.onFilerChange}>
                        <option value="Latest">Latest</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Highest">Highest</option>

                    </select>
                </div>
                <div>
                    SIZE:{" "}
                    <select name="size" value={this.props.size} onChange={this.props.onSizeChange}>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>

                    </select>
                </div>
            </div>
        )
    }
}
