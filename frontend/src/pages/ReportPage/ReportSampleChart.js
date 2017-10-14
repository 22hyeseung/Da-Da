import React, { Component } from 'react'
import './ReportSampleChart.css'

class ReportSampleChart extends Component {
  render() {
    return (
      <section class="report-chart">
        <ul class="report-chart__lines">
          <li>40</li>
          <li>30</li>
          <li>20</li>
          <li>0</li>
        </ul>
        <ul class="report-chart__bar-series">
          <li>
            <div class="report-graph-bar bar-1 report-pullUp">
              <span class="report-notes">17</span>
            </div>
            <span class="report-chart__x-value">
              Mon
            </span>
          </li>
          <li>
            <div class="report-graph-bar report-bar-2 report-pullUp">
              <span class="report-notes">19</span>
            </div>
            <span class="report-chart__x-value">
              Tues
            </span>
          </li>
          <li>
            <div class="report-graph-bar report-bar-3 report-pullUp">
              <span class="report-notes">27</span>
            </div>
            <span class="report-chart__x-value">
              Wed
            </span>
          </li>
          <li>
            <div class="report-graph-bar report-bar-4 report-pullUp">
              <span class="report-notes">32</span>
            </div>
            <span class="report-chart__x-value">
              Thu
            </span>
          </li>
          <li>
            <div class="report-graph-bar report-bar-5 report-pullUp">
              <span class="report-notes">29</span>
            </div>
            <span class="report-chart__x-value">
              Fri
            </span>
          </li>
          <li>
            <div class="report-graph-bar bar-6 pullUp">
              <span class="report-notes white">
                34
              </span>
            </div>
            <span class="report-chart__x-value">
              Sat
            </span>
          </li>
          <li>
            <div class="report-graph-bar report-bar-7 report-pullUp">
              <span class="report-notes">30</span>
            </div>
            <span class="report-chart__x-value">
              Sun
            </span>
          </li>
        </ul>
      </section>
    )
  }
}

export default ReportSampleChart
