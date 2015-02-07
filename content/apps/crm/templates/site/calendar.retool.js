<h1>Calendar: West Coast</h1>
<section class="calendar">
  <div class="title-bar">
    <h3>{{this.monthName}} 
      <button class="btn btn-link" icon="plus-sign">New Appointment</button>
    </h3>
  </div>
  <table class="calendar">
    <tr>
      <r-foreach var="dayName" obj="this.dayNames">
        <th>{{dayName.text}}</th>
      </r-foreach>
      <th>Weekly Total</th>
    </tr>
    <r-foreach var="week" obj="this.weeks">
      <tr>
        <r-foreach var="day" obj="week.days">
          <td>
            <div>
              <div class="day-label">{{day.day}}</div>
              <r-foreach var="appt" obj="day.appts">
                <div class="appt">
                  <div class="appt-name">{{appt.name}}</div>
                  <div>
                    <span class="appt-type label {{appt.type == &quot;Webinar&quot; ? &quot;label-info&quot; : &quot;label-warning&quot;}}">{{appt.type}}</span>
                    <span class="appt-time">{{appt.time}}</span>
                  </div>
                </div>
              </r-foreach>
            </div>
          </td>
        </r-foreach>
        <td class="totals">
          <div>
            <div class="week-total">
              <span class="label label-info">Webinars</span>
              <span>{{week.totals.webinars}}</span>
            </div>
            <div class="week-total">
              <span class="label label-warning">Meetings</span>
              <span>{{week.totals.meetings}}</span>
            </div>
          </div>
        </td>
      </tr>
    </r-foreach>
    <tr>
      <td colspan="7"></td>
      <td class="totals">
        <div>
          <h4>Monthly Total</h4>
          <div class="week-total">
            <span class="label label-info">Webinars</span>
            <span>3</span>
          </div>
          <div class="week-total">
            <span class="label label-warning">Meetings</span>
            <span>2</span>
          </div>
        </div>
      </td>
    </tr>
  </table>
</section>
<section class="details">
  <h2>{{this.details.name}}</h2>
  <div>
    <span class="label label-info">Webinar</span>
    <span> {{this.details.appt.date}}</span>
    <span> {{this.details.appt.time}}</span>
  </div>
  <div class="detail-section">
    <h4>Property</h4>
    <div>{{this.details.stage}}</div>
    <div class="text-bold text-large">{{this.details.property}}</div>
    <div>Purchased: {{this.details.purchaseDate}}</div>
  </div>
  <div class="detail-section">
    <h4>Contact</h4>
    <div>{{this.details.city}}, {{this.details.state}}</div>
    <div class="text-bold">
      <span class="glyphicon glyphicon-phone-alt"></span>
      <span> {{this.details.phone}}</span>
    </div>
    <div>
      <span class="glyphicon glyphicon-envelope"></span>
      <span> {{this.details.email}}</span>
    </div>
  </div>
  <div class="detail-section">
    <h4>Marketing</h4>
    <div>{{this.details.leadSource}}</div>
  </div>
  <div class="detail-section">
    <h4>Notes 
      <button class="btn btn-link" icon="pencil">Edit</button>
    </h4>
    <div>{{this.details.notes}}</div>
  </div>
  <br/>
  <hr/>
  <button class="btn btn-primary" icon="calendar">Reschedule</button>
</section>
==
class Calendar extends Template {
  constructor(){
    this.advisor = "Trevor Hein";
    this.buildCalendar();
    this.createAppointments();
    this.createTotals();
    this.createDetails();
  }
  
  buildCalendar(){
    this.monthName = "February 2015";
    var weeks = [];
    var dw = 1;
    var max = 28;
    var dayNames = [{text:'Sun'},{text:'Mon'},{text:'Tue'},{text:'Wed'},{text:'Thu'},{text:'Fri'},{text:'Sat'}];
    for (var w = 0;w < 5;w++){
      var week = {index:w,totals:{},appts:[]};
      var days = [];
      for (var d = 0;d < 7;d++){
        days.push({index:d,day:dw,appts:[]});
        dw++;
        if (dw > max){
          dw = 1;
        }
      }
      week.days = days;
      weeks.push(week);
    }
    this.weeks = new ArrayModel(weeks);
    this.dayNames = dayNames;   
  }
  
  createAppointments(){
    this.weeks[1].days[4].appts.push({date:"2-12-2015",name:"Michael Wagner",time:"10:00am",type:"Webinar"});
    this.weeks[1].days[4].appts.push({date:"2-2-2015",name:"Jeff Thompson",time:"2:00pm",type:"Meeting"});
    this.weeks[1].days[1].appts.push({date:"2-9-2015",name:"Richard Green",time:"9:am",type:"Meeting"});
    this.weeks[1].days[3].appts.push({date:"2-11-2015",name:"Susan Rogers",time:"11:00am",type:"Webinar"});
    this.weeks[1].days[5].appts.push({date:"2-13-2015",name:"Bill Nedermeyer",time:"1:00pm",type:"Webinar"});
  }
  
  createTotals(){
    this.weeks[1].totals.webinars = 3;
    this.weeks[1].totals.meetings = 2;
  }
  
  createDetails(){
    var details = {
      appt: {
        date: "Thu Feb 12",
        time: "10:00am"
      },
      name: "Michael Wagner",
      stage:"Initial Consultation",
      property:"Mariott - Waikiki",
      purchaseDate:"May 2004",
      city:"Bend",
      state:"OR",
      phone:"503-738-4888",
      email:"michael.wagner@gmail.com",
      leadSource:"Radio - Z100 Portland",
      notes:"Wife will join the webinar as well"
    };
    this.details = details;
  }
  
  
}
