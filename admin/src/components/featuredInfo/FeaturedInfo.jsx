import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featureMoneyContainer">
                <span className="featuredMoney">$2,344</span>
                <span className="featuredMoneyRate">
                    -21.3 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featureMoneyContainer">
                <span className="featuredMoney">$4,140</span>
                <span className="featuredMoneyRate">
                    -11.3 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featureMoneyContainer">
                <span className="featuredMoney">$1,140</span>
                <span className="featuredMoneyRate">
                    +09.3 <ArrowUpward className='featuredIcon'/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
    </div>
  )
}
