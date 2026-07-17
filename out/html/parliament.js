// parliaments.js
// This wraps d3-parliament to handle multiple state parliaments
(function() {
  'use strict';
  
  window.ParliamentData = {
    configs: {
      meck_stre: {
        totalSeats: 35,
        conditionalParties: [
          {
            id: 'kpd', legend: 'KPD', name: 'KPD', 
            qualityKey: 'kpd_r_meck_stre',
            condition: function(Q) { return Q.kpd_r_meck_stre; }
          },
          {
            id: 'spd', legend: 'SPD', name: 'SPD', 
            qualityKey: 'spd_r_meck_stre',
            condition: function(Q) { return Q.spd_r_meck_stre; }
          },
          {
            id: 'sapd', legend: 'SAPD', name: 'SAPD', 
            qualityKey: 'sapd_r_meck_stre',
            condition: function(Q) { return Q.sapd_formed && Q.sapd_r_meck_stre; }
          },
          {
            id: 'uspd', legend: 'USPD', name: 'USPD',
            qualityKey: 'uspd_r_meck_stre',
            condition: function(Q) { return Q.uspd_r_meck_stre; }
          },
          {
            id: 'ddp', 
            legend: function(Q) { return Q.ddp_name; },
            name: function(Q) { return Q.ddp_name; },
            qualityKey: 'ddp_r_meck_stre',
            condition: function(Q) { return Q.ddp_r_meck_stre && !Q.lvp_formed; }
          },
          {
            id: 'lvp', legend: 'LVP', name: 'LVP',
            qualityKey: 'lvp_r_meck_stre',
            condition: function(Q) { return Q.lvp_r_meck_stre && Q.lvp_formed; }
          },
          {
            id: 'hb', legend: 'VHG', name: 'VHG',
            qualityKey: 'vhg_r_meck_stre',
            condition: function(Q) { return Q.vhg_r_meck_stre; }
          },
          {
            id: 'other', legend: 'Other', name: 'Others',
            qualityKey: 'true_other_r_meck_stre',
            condition: function(Q) { return Q.true_other_r_meck_stre; }
          },
          {
            id: 'dvp', legend: 'DVP', name: 'DVP',
            qualityKey: 'dvp_r_meck_stre',
            condition: function(Q) { return Q.dvp_r_meck_stre && !Q.lvp_formed && Q.dvp_exist; }
          },
          {
            id: 'kvp', legend: 'KVP', name: 'KVP',
            qualityKey: 'kvp_r_meck_stre',
            condition: function(Q) { return Q.kvp_formed && Q.kvp_r_meck_stre; }
          },
          {
            id: 'farm', legend: 'Farm', name: 'Farm',
            qualityKey: 'farm_r_meck_stre',
            condition: function(Q) { return Q.farm_r_meck_stre; }
          },
          {
            id: 'wp', legend: 'WP', name: 'WP',
            qualityKey: 'wp_r_meck_stre',
            condition: function(Q) { return Q.wp_r_meck_stre; }
          },
          {
            id: 'vrp', legend: 'VRP', name: 'VRP',
            qualityKey: 'vrp_r_meck_stre',
            condition: function(Q) { return Q.vrp_r_meck_stre; }
          },
          {
            id: 'dnvp', legend: 'DNVP', name: 'DNVP', 
            qualityKey: 'dnvp_r_meck_stre',
            condition: function(Q) { return Q.dnvp_r_meck_stre; }
          },
          {
            id: 'dnf', legend: 'DNF', name: 'DNF',
            qualityKey: 'dnf_r_meck_stre',
            condition: function(Q) { return Q.dnf_formed && Q.dnf_r_meck_stre; }
          },
          {
            id: 'dvfp', legend: 'DVFP', name: 'DVFP', 
            qualityKey: 'dvfp_r_meck_stre',
            condition: function(Q) { return Q.dvfp_r_meck_stre; }
          },
          {
            id: 'nsfb', legend: 'NSFB', name: 'NSFB', 
            qualityKey: 'nsfb_r_meck_stre',
            condition: function(Q) { return Q.nsfb_r_meck_stre; }
          },
          {
            id: 'nsdap', legend: 'NSDAP', name: 'NSDAP', 
            qualityKey: 'nsdap_r_meck_stre',
            condition: function(Q) { return Q.nsdap_r_meck_stre; }
          }
        ],

      
      waldeck: {
        totalSeats: 17,
        conditionalParties: [
          {
            id: 'kpd', legend: 'KPD', name: 'KPD', 
            qualityKey: 'kpd_r_waldeck',
            condition: function(Q) { return Q.kpd_r_waldeck; }
          },
          {
            id: 'spd', legend: 'SPD', name: 'SPD', 
            qualityKey: 'spd_r_waldeck',
            condition: function(Q) { return Q.spd_r_waldeck; }
          },
          {
            id: 'uspd', legend: 'USPD', name: 'USPD',
            qualityKey: 'uspd_r_waldeck',
            condition: function(Q) { return Q.uspd_r_waldeck; }
          },
          {
            id: 'ddp',
            legend: function(Q) { return Q.ddp_name; },
            name: function(Q) { return Q.ddp_name; },
            qualityKey: 'ddp_r_waldeck',
            condition: function(Q) { return Q.ddp_r_waldeck && !Q.lvp_formed; }
          },
          {
            id: 'lvp', legend: 'LVP', name: 'LVP',
            qualityKey: 'lvp_r_waldeck',
            condition: function(Q) { return Q.lvp_r_waldeck && Q.lvp_formed; }
          },
          {
            id: 'aspd', legend: 'HB', name: 'HB',
            qualityKey: 'hb_r_waldeck',
            condition: function(Q) { return Q.hb_r_waldeck; }
          },
          {
            id: 'hb', legend: 'WV', name: 'WV',
            qualityKey: 'wv_r_waldeck',
            condition: function(Q) { return Q.wv_r_waldeck; }
          },
          {
            id: 'dvp', legend: 'DVP', name: 'DVP',
            qualityKey: 'dvp_r_waldeck',
            condition: function(Q) { return Q.dvp_r_waldeck && !Q.lvp_formed && Q.dvp_exist; }
          },
          {
            id: 'dnvp', legend: 'DNVP', name: 'DNVP',
            qualityKey: 'dnvp_r_waldeck',
            condition: function(Q) { return Q.dnvp_r_waldeck && Q.year == 1925; }
          },
          {
            id: 'rl', legend: 'RL', name: 'RL',
            qualityKey: 'rl_r_waldeck',
            condition: function(Q) { return Q.rl_r_waldeck; }
          },
          {
            id: 'farm2', legend: 'LB', name: 'LB',
            qualityKey: 'other_r_waldeck',
            condition: function(Q) { return Q.other_r_waldeck; }
          },
         {
            id: 'nsdap', legend: 'NSDAP', name: 'NSDAP', 
            qualityKey: 'nsdap_r_waldeck',
            condition: function(Q) { return Q.nsdap_r_waldeck; }
          }
        ]
      }
      // Add more states here...
    },
    
    computedData: {},
    
    // Build data array from config and game qualities
    buildData: function(stateId) {
      var Q = window.dendryUI.dendryEngine.state.qualities;
      var config = this.configs[stateId];
      if (!config) return [];
      
      var data = [];
      
      // Add required parties
      config.parties.forEach(function(party) {
        data.push({
          id: party.id,
          legend: typeof party.legend === 'function' ? party.legend(Q) : party.legend,
          name: typeof party.name === 'function' ? party.name(Q) : party.name,
          seats: Math.round(Q[party.qualityKey] * config.totalSeats),
          color: party.color
        });
      });
      
      // Add conditional parties
      if (config.conditionalParties) {
        config.conditionalParties.forEach(function(party) {
          if (party.condition(Q)) {
            data.push({
              id: party.id,
              legend: typeof party.legend === 'function' ? party.legend(Q) : party.legend,
              name: typeof party.name === 'function' ? party.name(Q) : party.name,
              seats: Math.round(Q[party.qualityKey] * config.totalSeats),
              color: party.color
            });
          }
        });
      }
      
      // Add always-included parties
      if (config.alwaysInclude) {
        config.alwaysInclude.forEach(function(party) {
          data.push({
            id: party.id,
            legend: typeof party.legend === 'function' ? party.legend(Q) : party.legend,
            name: typeof party.name === 'function' ? party.name(Q) : party.name,
            seats: Math.round(Q[party.qualityKey] * config.totalSeats),
            color: party.color
          });
        });
      }
      
      return data;
    },
    
    // Render a parliament chart using d3-parliament
    renderParliament: function(stateId, container) {
      if (!container || typeof d3 === 'undefined') return;
      
      var data = this.buildData(stateId);
      this.computedData[stateId] = data;
      
      // Clear previous content
      container.innerHTML = '';
      
      // Use d3-parliament (your existing library)
      var width = container.offsetWidth || 500;
      var height = width / 2;
      
      var parliament = d3.parliament();
      parliament.width(width).height(height).innerRadiusCoef(0.4);
      parliament.enter.fromCenter(true).smallToBig(true);
      parliament.exit.toCenter(false).bigToSmall(true);
      
      d3.select(container).datum(data).call(parliament);
    },
    
    getData: function(stateId) {
      if (!this.computedData[stateId]) {
        this.computedData[stateId] = this.buildData(stateId);
      }
      return this.computedData[stateId];
    }
  };
})();
