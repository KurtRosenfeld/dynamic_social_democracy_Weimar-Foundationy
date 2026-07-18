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

baden: {
        totalSeatsKey: 'seats_baden',
        conditionalParties: [
          {
            id: 'kpd', legend: 'KPD', name: 'KPD', 
            qualityKey: 'kpd_r_baden',
            condition: function(Q) { return Q.kpd_r_baden; }
          },
          {
            id: 'sapd', legend: 'SAPD', name: 'SAPD', 
            qualityKey: 'sapd_r_baden',
            condition: function(Q) { return Q.sapd_formed && Q.sapd_r_baden; }
          },
          {
            id: 'uspd', legend: 'USPD', name: 'USPD',
            qualityKey: 'uspd_r_bavaria',
            condition: function(Q) { return Q.uspd_r_baden; }
          },
          {
            id: 'spd', legend: 'SPD', name: 'SPD', 
            qualityKey: 'spd_r_baden',
            condition: function(Q) { return Q.spd_r_baden; }
          },
          {
            id: 'ddp', 
            legend: function(Q) { return Q.ddp_name; },
            name: function(Q) { return Q.ddp_name; },
            qualityKey: 'ddp_r_baden',
            condition: function(Q) { return Q.ddp_r_baden && !Q.lvp_formed; }
          },
          {
            id: 'lvp', legend: 'LVP', name: 'LVP',
            qualityKey: 'lvp_r_baden',
            condition: function(Q) { return Q.lvp_r_baden && Q.lvp_formed; }
          },
          {
            id: 'z', legend: 'Z', name: 'Z',
            qualityKey: 'z_r_baden',
            condition: function(Q) { return Q.z_r_baden; }
          },
          {
            id: 'other', legend: 'Other', name: 'Others',
            qualityKey: 'true_other_r_baden',
            condition: function(Q) { return Q.true_other_r_baden; }
          },
          {
            id: 'dvp', legend: 'DVP', name: 'DVP',
            qualityKey: 'dvp_r_baden',
            condition: function(Q) { return Q.dvp_r_baden && !Q.lvp_formed && Q.dvp_exist; }
          },
          {
            id: 'wp', legend: 'WP', name: 'WP',
            qualityKey: 'wp_r_baden',
            condition: function(Q) { return Q.wp_r_baden; }
          },
          {
            id: 'kvp', legend: 'KVP', name: 'KVP',
            qualityKey: 'kvp_r_baden',
            condition: function(Q) { return Q.kvp_formed && Q.kvp_r_baden; }
          },
          {
            id: 'farm3', legend: 'Farmers', name: 'Farmers',
            qualityKey: 'farm_r_baden',
            condition: function(Q) { return Q.farm_r_baden; }
          },
          {
            id: 'csvd', legend: 'CSVD', name: 'CSVD',
            qualityKey: 'csvd_r_baden',
            condition: function(Q) { return Q.csvd_exists && Q.csvd_r_baden; }
          },
          {
            id: 'farm2', legend: 'CNBL', name: 'CNBL',
            qualityKey: 'cnbl_r_baden',
            condition: function(Q) { return Q.cnbl_exists && Q.cnbl_r_baden; }
          },
          {
            id: 'dnvp', legend: 'DNVP', name: 'DNVP', 
            qualityKey: 'dnvp_r_baden',
            condition: function(Q) { return Q.dnvp_r_baden; }
          },
          {
            id: 'dnf', legend: 'DNF', name: 'DNF',
            qualityKey: 'dnf_r_baden',
            condition: function(Q) { return Q.dnf_formed && Q.dnf_r_baden; }
          },
          {
            id: 'dvfp', legend: 'DVFP', name: 'DVFP', 
            qualityKey: 'dvfp_r_baden',
            condition: function(Q) { return Q.dvfp_r_baden; }
          },
          {
            id: 'nsfb', legend: 'NSFB', name: 'NSFB', 
            qualityKey: 'nsfb_r_baden',
            condition: function(Q) { return Q.nsfb_r_baden; }
          },
          {
            id: 'nsdap', legend: 'NSDAP', name: 'NSDAP', 
            qualityKey: 'nsdap_r_baden',
            condition: function(Q) { return Q.nsdap_r_baden; }
          }
        ]
      },


      wurttemberg: {
        totalSeatsKey: 'seats_wurttemberg',
        conditionalParties: [
          {
            id: 'kpd', legend: 'KPD', name: 'KPD', 
            qualityKey: 'kpd_r_wurttemberg',
            condition: function(Q) { return Q.kpd_r_wurttemberg; }
          },
          {
            id: 'sapd', legend: 'SAPD', name: 'SAPD', 
            qualityKey: 'sapd_r_wurttemberg',
            condition: function(Q) { return Q.sapd_formed && Q.sapd_r_wurttemberg; }
          },
          {
            id: 'uspd', legend: 'USPD', name: 'USPD',
            qualityKey: 'uspd_r_wurttemberg',
            condition: function(Q) { return Q.uspd_r_wurttemberg; }
          },
          {
            id: 'spd', legend: 'SPD', name: 'SPD', 
            qualityKey: 'spd_r_wurttemberg',
            condition: function(Q) { return Q.spd_r_wurttemberg; }
          },
          {
            id: 'ddp', 
            legend: function(Q) { return Q.ddp_name; },
            name: function(Q) { return Q.ddp_name; },
            qualityKey: 'ddp_r_wurttemberg',
            condition: function(Q) { return Q.ddp_r_wurttemberg && !Q.lvp_formed; }
          },
          {
            id: 'lvp', legend: 'LVP', name: 'LVP',
            qualityKey: 'lvp_r_wurttemberg',
            condition: function(Q) { return Q.lvp_r_wurttemberg && Q.lvp_formed; }
          },
          {
            id: 'z', legend: 'Z', name: 'Z',
            qualityKey: 'z_r_wurttemberg',
            condition: function(Q) { return Q.z_r_wurttemberg; }
          },
          {
            id: 'csvd', legend: 'CSVD', name: 'CSVD',
            qualityKey: 'csvd_r_wurttemberg',
            condition: function(Q) { return Q.csvd_r_wurttemberg; }
          },
          {
            id: 'dvp', legend: 'DVP', name: 'DVP',
            qualityKey: 'dvp_r_wurttemberg',
            condition: function(Q) { return Q.dvp_r_wurttemberg && !Q.lvp_formed && Q.dvp_exist; }
          },
          {
            id: 'farm2', legend: 'WBWB', name: 'WBWB',
            qualityKey: 'wbwb_r_wurttemberg',
            condition: function(Q) { return Q.wbwb_r_wurttemberg; }
          },
          {
            id: 'kvp', legend: 'KVP', name: 'KVP',
            qualityKey: 'kvp_r_wurttemberg',
            condition: function(Q) { return Q.kvp_formed && Q.kvp_r_wurttemberg; }
          },
          {
            id: 'farm3', legend: 'Farmers', name: 'Farmers',
            qualityKey: 'farm_r_wurttemberg',
            condition: function(Q) { return Q.farm_r_wurttemberg; }
          },
          {
            id: 'vrp', legend: 'VRP', name: 'VRP',
            qualityKey: 'vrp_r_wurttemberg',
            condition: function(Q) { return Q.vrp_r_wurttemberg; }
          },
          {
            id: 'dnvp', legend: 'DNVP', name: 'DNVP', 
            qualityKey: 'dnvp_r_wurttemberg',
            condition: function(Q) { return Q.dnvp_r_wurttemberg; }
          },
          {
            id: 'dnf', legend: 'DNF', name: 'DNF',
            qualityKey: 'dnf_r_wurttemberg',
            condition: function(Q) { return Q.dnf_formed && Q.dnf_r_wurttemberg; }
          },
          {
            id: 'nsfb', legend: 'NSFB', name: 'NSFB', 
            qualityKey: 'nsfb_r_wurttemberg',
            condition: function(Q) { return Q.nsfb_r_wurttemberg; }
          },
          {
            id: 'nsdap', legend: 'NSDAP', name: 'NSDAP', 
            qualityKey: 'nsdap_r_wurttemberg',
            condition: function(Q) { return Q.nsdap_r_wurttemberg; }
          }
        ]
      },


      saxony: {
        totalSeatsKey: 'seats_saxony',
        conditionalParties: [
          {
            id: 'kpd', legend: 'KPD', name: 'KPD', 
            qualityKey: 'kpd_r_saxony',
            condition: function(Q) { return Q.kpd_r_saxony; }
          },
          {
            id: 'sapd', legend: 'SAPD', name: 'SAPD', 
            qualityKey: 'sapd_r_saxony',
            condition: function(Q) { return Q.sapd_formed && Q.sapd_r_saxony; }
          },
          {
            id: 'uspd', legend: 'USPD', name: 'USPD',
            qualityKey: 'uspd_r_saxony',
            condition: function(Q) { return Q.uspd_r_saxony; }
          },
          {
            id: 'spd', legend: 'SPD', name: 'SPD', 
            qualityKey: 'spd_r_saxony',
            condition: function(Q) { return Q.spd_r_saxony; }
          },
          {
            id: 'aspd', legend: 'ASPD', name: 'ASPD', 
            qualityKey: 'aspd_r_saxony',
            condition: function(Q) { return Q.aspd_r_saxony; }
          },
          {
            id: 'ddp', 
            legend: function(Q) { return Q.ddp_name; },
            name: function(Q) { return Q.ddp_name; },
            qualityKey: 'ddp_r_saxony',
            condition: function(Q) { return Q.ddp_r_saxony && !Q.lvp_formed; }
          },
          {
            id: 'lvp', legend: 'LVP', name: 'LVP',
            qualityKey: 'lvp_r_saxony',
            condition: function(Q) { return Q.lvp_r_saxony && Q.lvp_formed; }
          },
          {
            id: 'z', legend: 'Z', name: 'Z',
            qualityKey: 'z_r_saxony',
            condition: function(Q) { return Q.z_r_saxony; }
          },
          {
            id: 'other', legend: 'Other', name: 'Others',
            qualityKey: 'true_other_r_saxony',
            condition: function(Q) { return Q.true_other_r_saxony; }
          },
          {
            id: 'dvp', legend: 'DVP', name: 'DVP',
            qualityKey: 'dvp_r_saxony',
            condition: function(Q) { return Q.dvp_r_saxony && !Q.lvp_formed && Q.dvp_exist; }
          },
          {
            id: 'farm4', legend: 'Farmers', name: 'Farmers',
            qualityKey: 'farm_r_saxony',
            condition: function(Q) { return Q.farm_r_saxony && Q.dnvp_ideology == "Moderate"; }
          },
          {
            id: 'wp', legend: 'WP', name: 'WP',
            qualityKey: 'wp_r_saxony',
            condition: function(Q) { return Q.wp_r_saxony; }
          },
          {
            id: 'vrp', legend: 'VRP', name: 'VRP',
            qualityKey: 'vrp_r_saxony',
            condition: function(Q) { return Q.vrp_r_saxony; }
          },
          {
            id: 'vnr', legend: 'VNR', name: 'VNR',
            qualityKey: 'vnr_r_saxony',
            condition: function(Q) { return Q.vnr_r_saxony; }
          },{
            id: 'csvd', legend: 'CSVD', name: 'CSVD',
            qualityKey: 'csvd_r_saxony',
            condition: function(Q) { return Q.csvd_exists && Q.csvd_r_saxony; }
          },
          {
            id: 'kvp', legend: 'KVP', name: 'KVP',
            qualityKey: 'kvp_r_saxony',
            condition: function(Q) { return Q.kvp_formed && Q.kvp_r_saxony; }
          },
          {
            id: 'farm4', legend: 'Farmers', name: 'Farmers',
            qualityKey: 'farm_r_saxony',
            condition: function(Q) { return Q.farm_r_saxony && Q.dnvp_ideology == "Radical"; }
          },
          {
            id: 'dnvp', legend: 'DNVP', name: 'DNVP', 
            qualityKey: 'dnvp_r_saxony',
            condition: function(Q) { return Q.dnvp_r_saxony; }
          },
          {
            id: 'dnf', legend: 'DNF', name: 'DNF',
            qualityKey: 'dnf_r_saxony',
            condition: function(Q) { return Q.dnf_formed && Q.dnf_r_saxony; }
          },
          {
            id: 'dvfp', legend: 'DVFP', name: 'DVFP', 
            qualityKey: 'dvfp_r_saxony',
            condition: function(Q) { return Q.dvfp_r_saxony; }
          },
          {
            id: 'nsfb', legend: 'NSFB', name: 'NSFB', 
            qualityKey: 'nsfb_r_saxony',
            condition: function(Q) { return Q.nsfb_r_saxony; }
          },
          {
            id: 'nsdap', legend: 'NSDAP', name: 'NSDAP', 
            qualityKey: 'nsdap_r_saxony',
            condition: function(Q) { return Q.nsdap_r_saxony; }
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
            id: 'uspd', legend: 'USPD', name: 'USPD',
            qualityKey: 'uspd_r_waldeck',
            condition: function(Q) { return Q.uspd_r_waldeck; }
          },
          {
            id: 'spd', legend: 'SPD', name: 'SPD', 
            qualityKey: 'spd_r_waldeck',
            condition: function(Q) { return Q.spd_r_waldeck; }
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
  
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  
  var width = 260;
  if (container.offsetWidth && container.offsetWidth > 10) {
    width = container.offsetWidth;
  }
  
  var height = width / 2;
  
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
