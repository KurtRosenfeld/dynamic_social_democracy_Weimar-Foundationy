(function() {
  var game;
  var ui;

  var DateOptions = {hour: 'numeric',
                 minute: 'numeric',
                 second: 'numeric',
                 year: 'numeric',
                 month: 'short',
                 day: 'numeric' };

  var main = function(dendryUI) {
    ui = dendryUI;
    game = ui.game;
  };

  var TITLE = "Social Democracy: An Alternate History" + '_' + "Autumn Chen";

  window.loadMod = function(url) {
      ui.loadGame(url);
  };

  window.showStats = function() {
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('library')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('library');
    }
  };

  window.showMap = function() {
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('maps')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('maps');
    }
  };
  
  window.showMods = function() {
    window.hideOptions();
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('mod_loader')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('mod_loader');
    }
  };

  window.showColours = function() {
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('colour_settings')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('colour_settings');
    }
  };
  
  window.showOptions = function() {
      var save_element = document.getElementById('options');
      window.populateOptions();
      save_element.style.display = "block";
      if (!save_element.onclick) {
          save_element.onclick = function(evt) {
              var target = evt.target;
              var save_element = document.getElementById('options');
              if (target == save_element) {
                  window.hideOptions();
              }
          };
      }
  };

  window.hideOptions = function() {
      var save_element = document.getElementById('options');
      save_element.style.display = "none";
  };

  window.disableBg = function() {
      window.dendryUI.disable_bg = true;
      document.body.style.backgroundImage = 'none';
      window.dendryUI.saveSettings();
  };

  window.enableBg = function() {
      window.dendryUI.disable_bg = false;
      window.dendryUI.setBg(window.dendryUI.dendryEngine.state.bg);
      window.dendryUI.saveSettings();
  };

  window.disableAnimate = function() {
      window.dendryUI.animate = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimate = function() {
      window.dendryUI.animate = true;
      window.dendryUI.saveSettings();
  };

  window.disableAnimateBg = function() {
      window.dendryUI.animate_bg = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimateBg = function() {
      window.dendryUI.animate_bg = true;
      window.dendryUI.saveSettings();
  };

  window.disableAudio = function() {
      window.dendryUI.toggle_audio(false);
      window.dendryUI.saveSettings();
  };

  window.enableAudio = function() {
      window.dendryUI.toggle_audio(true);
      window.dendryUI.saveSettings();
  };

  window.enableImages = function() {
    window.dendryUI.show_portraits = true;
    window.dendryUI.saveSettings();
  };

  window.disableImages = function() {
    window.dendryUI.show_portraits = false;
    window.dendryUI.saveSettings();
  };

  window.enableLightMode = function() {
    window.dendryUI.dark_mode = false;
    document.body.classList.remove('dark-mode');
    window.dendryUI.saveSettings();
  };
  
  window.enableDarkMode = function() {
    window.dendryUI.dark_mode = true;
    document.body.classList.add('dark-mode');
    window.dendryUI.saveSettings();
  };

  window.enableGrayMode = function() {
    window.dendryUI.gray_mode = true;
    document.body.classList.add('gray-mode');
    window.dendryUI.saveSettings();
  };
  
  window.disableGrayMode = function() {
    window.dendryUI.gray_mode = false;
    document.body.classList.remove('gray-mode');
    window.dendryUI.saveSettings();
  };

  function applyPartyColors() {
    const colors = {
        kpd: '{{ Q.kpd_colour }}',
        sapd: '{{ Q.sapd_colour }}',
        uspd: '{{ Q.uspd_colour }}',
        aspd: '{{ Q.aspd_colour }}',
        ddp: '{{ Q.ddp_colour }}',
        lvp: '{{ Q.lvp_colour }}',
        dvp: '{{ Q.dvp_colour }}',
        dnvp: '{{ Q.dnvp_colour }}',
        z: '{{ Q.z_colour }}',
        nsdap: '{{ Q.nsdap_colour }}'
    };
    
    for (const [party, color] of Object.entries(colors)) {
        const elements = document.querySelectorAll('.seat.' + party);
        elements.forEach(function(seat) { seat.style.fill = color; });
    }
  }

  window.applyPartyColors = function() {
    if (!window.dendryUI || !window.dendryUI.dendryEngine) return;
    
    const qualities = window.dendryUI.dendryEngine.state.qualities;
    
    const colorMap = {
        uspd: qualities.uspd_colour,
        ddp: qualities.ddp_colour,
        kpd: qualities.kpd_colour,
        dvp: qualities.dvp_colour,
        aspd: qualities.aspd_colour,
        dnvp: qualities.dnvp_colour,
        lvp: qualities.lvp_colour,
        z: qualities.z_colour,
        nsdap: qualities.nsdap_colour
    };
    
    for (const [party, color] of Object.entries(colorMap)) {
        if (color) {
            document.querySelectorAll('.seat.' + party).forEach(function(seat) {
                seat.style.fill = color;
            });
        }
    }
  };

  window.setupColorObserver = function() {
    const observer = new MutationObserver(function(mutations) {
        const hasNewSeats = mutations.some(function(mutation) {
            return mutation.addedNodes.length > 0 && 
                   mutation.target.querySelector && 
                   mutation.target.querySelector('.seat');
        });
        if (hasNewSeats) {
            window.applyPartyColors();
        }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyPartyColors);
  } else {
    applyPartyColors();
  }
  
  window.populateOptions = function() {
    var disable_bg = window.dendryUI.disable_bg;
    var animate = window.dendryUI.animate;
    var disable_audio = window.dendryUI.disable_audio;
    var show_portraits = window.dendryUI.show_portraits;
    if (disable_bg) {
        $('#backgrounds_no')[0].checked = true;
    } else {
        $('#backgrounds_yes')[0].checked = true;
    }
    if (animate) {
        $('#animate_yes')[0].checked = true;
    } else {
        $('#animate_no')[0].checked = true;
    }
    if (disable_audio) {
        $('#audio_no')[0].checked = true;
    } else {
        $('#audio_yes')[0].checked = true;
    }
    if (show_portraits) {
        $('#images_yes')[0].checked = true;
    } else {
        $('#images_no')[0].checked = true;
    }
    if (window.dendryUI.dark_mode) {
        $('#dark_mode')[0].checked = true;
    } else {
        $('#light_mode')[0].checked = true;
    }
    if (window.dendryUI.gray_mode) {
        $('#gray_on')[0].checked = true;
    } else {
        $('#gray_no')[0].checked = true;
    }
};
  
  window.displayText = function(text) {
      return text;
  };

  window.handleSignal = function(signal, event, scene_id) {
  };
  
  window.onNewPage = function() {
    var scene = window.dendryUI.dendryEngine.state.sceneId;
    if (scene != 'root' && !window.justLoaded) {
        window.dendryUI.autosave();
    }
    if (window.justLoaded) {
        window.justLoaded = false;
    }
    setTimeout(window.initTooltips, 500);
  };

window.updateSidebar = function() {
    $('#qualities').empty();
    var scene = dendryUI.game.scenes[window.statusTab];
    dendryUI.dendryEngine._runActions(scene.onArrival);
    var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
    $('#qualities').append(dendryUI.contentToHTML.convert(displayContent));
};

window.updateSidebarRight = function() {
    $('#qualities_right').empty();
    var scene = dendryUI.game.scenes[window.statusTabRight];
    dendryUI.dendryEngine._runActions(scene.onArrival);
    var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
    $('#qualities_right').append(dendryUI.contentToHTML.convert(displayContent));
};

  window.changeTab = function(newTab, tabId, isRight) {
      if (tabId == 'poll_tab' && (dendryUI.dendryEngine.state.qualities.historical_mode || dendryUI.dendryEngine.state.qualities.rubicon)) {
          if (dendryUI.dendryEngine.state.qualities.historical_mode && !dendryUI.dendryEngine.state.qualities.rubicon) window.alert('Polls are not available in historical mode.');
          if (dendryUI.dendryEngine.state.qualities.rubicon) window.alert('Polls are not available after crossing the rubicon.');
          return;
      }
      var tabButton = document.getElementById(tabId);
      var tabButtons = document.getElementsByClassName('tab_button');
      for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(' active', '');
      }
      tabButton.className += ' active';
      if (isRight) {
        window.statusTabRight = newTab;
        window.updateSidebarRight();
      } else {
        window.statusTab = newTab;
        window.updateSidebar();
      }
  };

  window.onDisplayContent = function() {
      window.updateSidebar();
      window.updateSidebarRight();
      setTimeout(window.initTooltips, 500);
  };

  window.toggleDem = function() {
      const resultsDiv = document.getElementById('results');
      if (resultsDiv.style.display === 'none' || resultsDiv.style.display === '') {
          resultsDiv.style.display = 'block';
      } else {
          resultsDiv.style.display = 'none';
      }
  };
  
  window.toggleGraph = function() {
      const svgElement = document.getElementById('party_support_history');
      if (svgElement.style.display === 'none' || svgElement.style.display === '') {
          svgElement.style.display = 'block';
      } else {
          svgElement.style.display = 'none';
      }
  };
  
  window.toggleElectionGraph = function() {
      const svgElement = document.getElementById('election_history');
      if (svgElement.style.display === 'none' || svgElement.style.display === '') {
          svgElement.style.display = 'block';
      } else {
          svgElement.style.display = 'none';
      }
  };
  
  window.toggleNews = function() {
      const elements = document.querySelectorAll('.dnvp');
      const elements2 = document.querySelectorAll('.other');
      const button = document.getElementById('news_tab');

      if (!button) {
          console.error('Button with id "news_tab" not found.');
          return;
      }

      elements.forEach(function(element) {
          if (element.style.display !== 'block') {
              element.style.display = 'block';
              button.innerHTML = "View Other News";
          } else {
              element.style.display = 'none';
              button.innerHTML = "View Right-Wing News";
          }
      });

      elements2.forEach(function(element) {
          if (element.style.display !== 'none') {
              element.style.display = 'none';
          } else {
              element.style.display = 'block';
          }
      });

      button.style.backgroundColor = '#dddddd';
  };

  window.generateBar = function(quality, qualityName, max, min, colors) {
      var bar = document.createElement('div');
      bar.className = 'bar';
      var value = document.createElement('div');
      value.className = 'barValue';
      var width = (quality - min)/(max - min);
      if (width > 1) {
          width = 1;
      } else if (width < 0) {
          width = 0;
      }
      value.style.width = Math.round(width*100) + '%';
      if (colors) {
          value.style.backgroundColor = window.probToColor(width*100);
      }
      bar.textContent = qualityName + ': ' + quality;
      if (colors) {
          bar.textContent += '/' + max;
      }
      bar.appendChild(value);
      return bar;
  };

  // ============================================
  // TOOLTIP SYSTEM
  // ============================================

window.initTooltips = function() {
  console.log('initTooltips called');
  
  if (window._tooltipsInitialized) {
    console.log('Already initialized');
    return;
  }
  window._tooltipsInitialized = true;
  
  var currentTooltip = null;
  var hideTimeout = null;
  
  function hideAllTooltips() {
    document.querySelectorAll('.tooltip-group.show-tooltip').forEach(function(t) {
      t.classList.remove('show-tooltip');
    });
  }
  
  // Render parliament chart inside tooltip
function renderTooltipChart(tooltip) {
  var chartContainer = tooltip.querySelector('.parliament-chart');
  if (!chartContainer) return;
  
  var stateId = chartContainer.getAttribute('data-state');
  if (!stateId) return;
  
  // Check if already rendered with data for this state
  if (chartContainer.getAttribute('data-rendered') === stateId) return;
  chartContainer.setAttribute('data-rendered', stateId);
  
  // Clear completely before rendering
  while (chartContainer.firstChild) {
    chartContainer.removeChild(chartContainer.firstChild);
  }
  
  if (window.ParliamentData) {
    window.ParliamentData.renderParliament(stateId, chartContainer);
  }
}
  
  document.body.addEventListener('mouseover', function(e) {
    const trigger = e.target.closest('.trigger-group');
    if (!trigger) return;
    
    const tooltipId = trigger.getAttribute('data-tooltip');
    if (!tooltipId) return;
    
    const tooltip = document.getElementById(tooltipId);
    if (!tooltip) return;
    
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
    
    if (currentTooltip && currentTooltip !== tooltip) {
      hideAllTooltips();
    }
    
    currentTooltip = tooltip;
    tooltip.classList.add('show-tooltip');
    
    // Render parliament chart if this tooltip has one
    renderTooltipChart(tooltip);
    
    updateTooltipPos(e, tooltip);
  });
  
  document.body.addEventListener('mousemove', function(e) {
    if (currentTooltip && currentTooltip.classList.contains('show-tooltip')) {
      updateTooltipPos(e, currentTooltip);
    }
  });
  
  document.body.addEventListener('mouseout', function(e) {
    const trigger = e.target.closest('.trigger-group');
    if (!trigger) return;
    
    const tooltipId = trigger.getAttribute('data-tooltip');
    if (!tooltipId) return;
    
    const tooltip = document.getElementById(tooltipId);
    if (!tooltip) return;
    
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && relatedTarget.closest('.tooltip-group')) return;
    
    hideTimeout = setTimeout(function() {
      const hoveredTrigger = document.querySelector('.trigger-group:hover');
      const hoveredTooltip = document.querySelector('.tooltip-group:hover');
      
      if (!hoveredTrigger && !hoveredTooltip) {
        tooltip.classList.remove('show-tooltip');
        if (currentTooltip === tooltip) {
          currentTooltip = null;
        }
      }
      hideTimeout = null;
    }, 50);
  });
  
  document.body.addEventListener('mouseenter', function(e) {
    const tooltip = e.target.closest('.tooltip-group');
    if (tooltip) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      tooltip.classList.add('show-tooltip');
    }
  }, true);
  
  document.body.addEventListener('mouseleave', function(e) {
    const tooltip = e.target.closest('.tooltip-group');
    if (tooltip) {
      const relatedTarget = e.relatedTarget;
      if (relatedTarget && relatedTarget.closest('.trigger-group')) return;
      
      tooltip.classList.remove('show-tooltip');
      if (currentTooltip === tooltip) {
        currentTooltip = null;
      }
    }
  }, true);
};

function updateTooltipPos(e, tooltip) {
  const x = e.clientX + 15;
  const y = e.clientY - 10;
  
  let left = x;
  let top = y;
  
  const width = tooltip.offsetWidth || 280;
  const height = tooltip.offsetHeight || 200;
  
  if (left + width > window.innerWidth) {
    left = e.clientX - width - 15;
  }
  if (top + height > window.innerHeight) {
    top = window.innerHeight - height - 10;
  }
  if (left < 0) left = 10;
  if (top < 0) top = 10;
  
  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
}

  // ============================================

  window.justLoaded = true;
  window.statusTab = "status";
  window.statusTabRight = "status_right";
  window.dendryModifyUI = main;

  window.onload = function() {
    window.dendryUI.loadSettings({show_portraits: true});
    if (window.dendryUI.dark_mode) {
        document.body.classList.add('dark-mode');
    }
    if (window.dendryUI.gray_mode) {
        document.body.classList.add('gray-mode');
    }
    window.pinnedCardsDescription = "Advisor cards - actions are only usable once per 6 months.";
    window.statusTab = "status";
    window.updateSidebar();
    window.statusTabRight = "status_right";
    window.updateSidebarRight();
    setTimeout(window.initTooltips, 500);
  };

})();
