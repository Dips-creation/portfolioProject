/* eslint-disable no-redeclare */
import React, { Component } from 'react'
import Data from "../Static_files/data"

export default class PersonComp extends Component {
    constructor(props) {
        super(props);

        this.state ={
            persondata:Data.Data,
            filterData:[]
        };
    }
    filterData = (e) =>{
        if(e.target.value === "male"){
            var filterdData = this.state.persondata.filter((data)=>{
                return data.gender === "male"
            })
        }
        if(e.target.value === "female"){
            var filterdData = this.state.persondata.filter((data)=>{
                return data.gender === "Female"
            })
        }
        this.setState({
            ...this.state,
            filterData:filterdData
        })
    }
  render() {
    return (
        
      <div><div className='radio'>
        <div class="custom-control custom-radio custom-control-inline ">
  <input type="radio" value="male" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" onChange={this.filterData}/>
  <label class="custom-control-label" for="customRadioInline1">Male</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" value="female" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"  onChange={this.filterData}/>
  <label class="custom-control-label" for="customRadioInline2">Female</label>
</div></div>
        <div className='container'>
            <div className='row'>
                {
                this.state.filterData.map(function(ele) {

                    return(
                        
                        <div className='col-md-4'>

                            <div className='card'>
                                <div className='card-header bg-dark text-white'>
                                    <h2>Persom Details</h2>
                                </div>
                                <div className='card-body'>
                                    <h5>ID:{ele.id}</h5>
                                    <h5>Title:{ele.title}</h5>
                                    <h5>UserId:{ele.userId}</h5>
                                    <h5>Gender:{ele.gender}</h5>
                                </div>
                                

                            </div>


                        </div>
                    );
                })

  }    
                

            </div>

        </div>
      </div>
    )
  }
}
