import React from 'react';


class ItemWeek extends React.Component {
  render() {
    return (
      <div className="iweeks" onClick={()=>{this.props.handlerWeek(this.props.week.id)}}>
        {this.props.week.name_week}
      </div>
    );
  }
}

class ListByWeeks extends React.Component {
  render() {
    return (
      <div className="weekContainer">
        <ul className="list-week">
          {this.props.weeks.map(week => {
            return (
              <li key={week.id}>
                <ItemWeek week={week} handlerWeek={this.props.handlerWeek} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListByWeeks;

