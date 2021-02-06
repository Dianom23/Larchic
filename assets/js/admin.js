$(document).ready(function() {
    $.getJSON("https://spreadsheets.google.com/feeds/list/1InS6hK4eu2k52izZO2UxQ-FxM6ek1VP_R2l4R0y3Vac/od6/public/values?alt=json", function(data) {
        data = data['feed']['entry'];
        console.log(data);
        showmaster(data);
    });
});

function showmaster(data) {
    var out = ''
    for (var i = 0; i < data.length; i++) {
        out += '<div class="col-lg-4 mast">';
        // out += '<img class="img-circle" alt="140x140" src="assets/img/' + data[i]['gsx$image']['$t'] + '.png" style="width: 140px; height: 140px;">';
        out += '<img class="img-circle" alt="140x140" src="' + data[i]['gsx$image']['$t'] + '" style="width: 140px; height: 140px;">';
        out += '<h2>' + data[i]['gsx$name']['$t'] + '</h2>';
        out += '<p><strong>должность:</strong> ' + data[i]['gsx$position']['$t'] + '</p>';
        out += '</div>';
    }
    $('#addmaster').html(out);
}