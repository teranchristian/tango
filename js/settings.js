var data = {
  tangos: {}
};

function save_options() {
  var tango = document.getElementById('tango').value;
  var hiragana = document.getElementById('hiragana').value;
  var katakana = document.getElementById('katakana').value;
  var displayDropdown = document.getElementById("display");
  var display = displayDropdown.options[displayDropdown.selectedIndex].value;
  var notes = document.getElementById('notes').value;

  data.tangos[tango] = {
      hiragana,
      katakana,
      display,
      notes
  };

  chrome.storage.sync.set(data, function() {
    // Update status to let user know the tangos were saved.
    var status = document.getElementById('status');
    status.textContent = 'Tango saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get('tangos', function(tangos) {
    data = tangos;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
