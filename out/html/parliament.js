// parliaments.js
// This wraps d3-parliament to handle multiple state parliaments
(function() {
  'use strict';
  
  window.ParliamentData = {
    configs: {
      meck_stre: {
        totalSeatsKey: 'meck_stre_seats',
        conditionalParties: [
          {
            id: 'kpd', legend: 'KPD', name: 'KPD', 
            qualityKey: 'kpd_r_meck_stre',
            condition: function(Q) { return Q.kpd_r_meck_stre; }
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
            id: 'spd', legend: 'SPD', name: 'SPD', 
            qualityKey: 'spd_r_meck_stre',
            condition: function(Q) { return Q.spd_r_meck_stre; }
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
            id: 'rl', legend: 'RL', name: 'RL',
            qualityKey: 'rl_r_meck_stre',
            condition: function(Q) { return Q.rl_r_meck_stre; }
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
        ]
      },

      meck_schwe: {
        totalSeatsKey: 'meck_schwe_seats',
        conditionalParties: [
          {
            id: 'kpd', legend: 'KPD', name: 'KPD', 
            qualityKey: 'kpd_r_meck_schwe',
            condition: function(Q) { return Q.kpd_r_meck_schwe; }
          },
          {
            id: 'sapd', legend: 'SAPD', name: 'SAPD', 
            qualityKey: 'sapd_r_meck_schwe',
            condition: function(Q) { return Q.sapd_formed && Q.sapd_r_meck_schwe; }
          },
          {
            id: 'uspd', legend: 'USPD', name: 'USPD',
            qualityKey: 'uspd_r_meck_schwe',
            condition: function(Q) { return Q.uspd_r_meck_schwe; }
          },
          {
            id: 'spd', legend: 'SPD', name: 'SPD', 
            qualityKey: 'spd_r_meck_schwe',
            condition: function(Q) { return Q.spd_r_meck_schwe; }
          },
          {
            id: 'ddp', 
            legend: function(Q) { return Q.ddp_name; },
            name: function(Q) { return Q.ddp_name; },
            qualityKey: 'ddp_r_meck_schwe',
            condition: function(Q) { return Q.ddp_r_meck_schwe && !Q.lvp_formed; }
          },
          {
            id: 'lvp', legend: 'LVP', name: 'LVP',
            qualityKey: 'lvp_r_meck_schwe',
            condition: function(Q) { return Q.lvp_r_meck_schwe && Q.lvp_formed; }
          },
          {
            id: 'wp', legend: 'WP', name: 'WP',
            qualityKey: 'wp_r_meck_schwe',
            condition: function(Q) { return Q.wp_r_meck_schwe; }
          },
          {
            id: 'other', legend: 'Other', name: 'Others',
            qualityKey: 'true_other_r_meck_schwe',
            condition: function(Q) { return Q.true_other_r_meck_schwe; }
          },
          {
            id: 'dvp', legend: 'DVP', name: 'DVP',
            qualityKey: 'dvp_r_meck_schwe',
            condition: function(Q) { return Q.dvp_r_meck_schwe && !Q.lvp_formed && Q.dvp_exist; }
          },
          {
            id: 'kvp', legend: 'KVP', name: 'KVP',
            qualityKey: 'kvp_r_meck_schwe',
            condition: function(Q) { return Q.kvp_formed && Q.kvp_r_meck_schwe; }
          },
          {
            id: 'dnvp', legend: 'DNVP', name: 'DNVP', 
            qualityKey: 'dnvp_r_meck_schwe',
            condition: function(Q) { return Q.dnvp_r_meck_schwe; }
          },
          {
            id: 'dnf', legend: 'DNF', name: 'DNF',
            qualityKey: 'dnf_r_meck_schwe',
            condition: function(Q) { return Q.dnf_formed && Q.dnf_r_meck_schwe; }
          },
          {
            id: 'dvfp', legend: 'DVFP', name: 'DVFP', 
            qualityKey: 'dvfp_r_meck_schwe',
            condition: function(Q) { return Q.dvfp_r_meck_schwe; }
          },
          {
            id: 'nsfb', legend: 'NSFB', name: 'NSFB', 
            qualityKey: 'nsfb_r_meck_schwe',
            condition: function(Q) { return Q.nsfb_r_meck_schwe; }
          },
          {
            id: 'nsdap', legend: 'NSDAP', name: 'NSDAP', 
            qualityKey: 'nsdap_r_meck_schwe',
            condition: function(Q) { return Q.nsdap_r_meck_schwe; }
          }
        ]
      },

      bavaria: {
        totalSeatsKey: 'seats_bavaria',
        conditionalParties: [
          {
            id: 'kpd', legend: 'KPD', name: 'KPD', 
            qualityKey: 'kpd_r_bavaria',
            condition: function(Q) { return Q.kpd_r_bavaria; }
          },
          {
            id: 'sapd', legend: 'SAPD', name: 'SAPD', 
            qualityKey: 'sapd_r_bavaria',
            condition: function(Q) { return Q.sapd_formed && Q.sapd_r_bavaria; }
          },
          {
            id: 'uspd', legend: 'USPD', name: 'USPD',
            qualityKey: 'uspd_r_bavaria',
            condition: function(Q) { return Q.uspd_r_bavaria; }
          },
          {
            id: 'spd', legend: 'SPD', name: 'SPD', 
            qualityKey: 'spd_r_bavaria',
            condition: function(Q) { return Q.spd_r_bavaria; }
          },
          {
            id: 'kag', legend: 'CSP', name: 'CSP',
            qualityKey: 'csp_r_bavaria',
            condition: function(Q) { return Q.csp_r_bavaria; }
          },
          {
            id: 'ddp', 
            legend: function(Q) { return Q.ddp_name; },
            name: function(Q) { return Q.ddp_name; },
            qualityKey: 'ddp_r_bavaria',
            condition: function(Q) { return Q.ddp_r_bavaria && !Q.lvp_formed; }
          },
          {
            id: 'lvp', legend: 'LVP', name: 'LVP',
            qualityKey: 'lvp_r_bavaria',
            condition: function(Q) { return Q.lvp_r_bavaria && Q.lvp_formed; }
          },
          {
            id: 'z', legend: 'Z', name: 'Z',
            qualityKey: 'true_z_r_bavaria',
            condition: function(Q) { return Q.true_z_r_bavaria; }
          },
          {
            id: 'farm', legend: 'Farm', name: 'Farm',
            qualityKey: 'farm_r_bavaria',
            condition: function(Q) { return Q.farm_r_bavaria; }
          },
          {
            id: 'other', legend: 'Other', name: 'Others',
            qualityKey: 'true_other_r_bavaria',
            condition: function(Q) { return Q.true_other_r_bavaria; }
          },
          {
            id: 'bvp', legend: 'BVP', name: 'BVP',
            qualityKey: 'bvp_r_bavaria',
            condition: function(Q) { return Q.bvp_r_bavaria; }
          },
          {
            id: 'dvp', legend: 'DVP', name: 'DVP',
            qualityKey: 'dvp_r_bavaria',
            condition: function(Q) { return Q.dvp_r_bavaria && !Q.lvp_formed && Q.dvp_exist; }
          },
          {
            id: 'kvp', legend: 'KVP', name: 'KVP',
            qualityKey: 'kvp_r_bavaria',
            condition: function(Q) { return Q.kvp_formed && Q.kvp_r_bavaria; }
          },
          {
            id: 'dnvp', legend: 'DNVP', name: 'DNVP', 
            qualityKey: 'dnvp_r_bavaria',
            condition: function(Q) { return Q.dnvp_r_bavaria; }
          },
          {
            id: 'dnf', legend: 'DNF', name: 'DNF',
            qualityKey: 'dnf_r_bavaria',
            condition: function(Q) { return Q.dnf_formed && Q.dnf_r_bavaria; }
          },
          {
            id: 'dvfp', legend: 'DVFP', name: 'DVFP', 
            qualityKey: 'dvfp_r_bavaria',
            condition: function(Q) { return Q.dvfp_r_bavaria; }
          },
          {
            id: 'nsfb', legend: 'NSFB', name: 'NSFB', 
            qualityKey: 'nsfb_r_bavaria',
            condition: function(Q) { return Q.nsfb_r_bavaria; }
          },
          {
            id: 'nsdap', legend: 'NSDAP', name: 'NSDAP', 
            qualityKey: 'nsdap_r_bavaria',
            condition: function(Q) { return Q.nsdap_r_bavaria; }
          }
        ]
      },
         
      
      waldeck: {
        totalSeatsKey: 'waldeck_seats',
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
            condition: function(Q) { return Q.dnvp_r_waldeck }
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
    },
    
    computedData: {},
    
buildData: function(stateId) {
  var Q = window.dendryUI.dendryEngine.state.qualities;
  var config = this.configs[stateId];
  if (!config) return [];

    console.log('State:', stateId);
  console.log('totalSeatsKey:', config.totalSeatsKey);
  console.log('Q[totalSeatsKey]:', Q[config.totalSeatsKey], 'fallback totalSeats:', config.totalSeats);
  
  var totalSeats = config.totalSeats;
  if (config.totalSeatsKey && typeof Q[config.totalSeatsKey] === 'number') {
    totalSeats = Q[config.totalSeatsKey];
  }
  
  var data = [];
  
  if (config.conditionalParties) {
    config.conditionalParties.forEach(function(party) {
      if (party.condition(Q)) {
        data.push({
          id: party.id,
          legend: typeof party.legend === 'function' ? party.legend(Q) : party.legend,
          name: typeof party.name === 'function' ? party.name(Q) : party.name,
          seats: Math.round(Q[party.qualityKey] * totalSeats),
          color: party.color
        });
      }
    });
  }
  
  return data;
},
    
    renderParliament: function(stateId, container) {
      if (!container || typeof d3 === 'undefined') return;
      
      var data = this.buildData(stateId);
      this.computedData[stateId] = data;
      
      if (data.length === 0) return;
      
      container.innerHTML = '';
      
      var width = 260;
      if (container.offsetWidth && container.offsetWidth > 10) {
        width = container.offsetWidth;
      }
      
      var height = width / 2;
      container.style.width = width + 'px';
      container.style.height = height + 'px';
      
      var svg = d3.select(container).append('svg')
        .attr('width', width)
        .attr('height', height);
      
      var parliament = d3.parliament();
      parliament.width(width).innerRadiusCoef(0.4);
      parliament.enter.fromCenter(true).smallToBig(true);
      parliament.exit.toCenter(false).bigToSmall(true);
      
      svg.datum(data).call(parliament);
    },

getTotalSeats: function(stateId) { 
      var Q = window.dendryUI.dendryEngine.state.qualities;
      var config = this.configs[stateId];
      if (!config) return 0;
      if (config.totalSeatsKey && typeof Q[config.totalSeatsKey] === 'number') {
        return Q[config.totalSeatsKey];
      }
      return config.totalSeats || 0;
    },

    
    getData: function(stateId) {
      if (!this.computedData[stateId]) {
        this.computedData[stateId] = this.buildData(stateId);
      }
      return this.computedData[stateId];
    }
  };
})();
