export async function ExportToCSV(data) {
  var headers = {
    name: "Nome do Pais",
    nativeName: "Nome Nativo",
    region: "Regiao",
    subregion: "Sub-Regiao",
    population: "Populacao",
    area: "Área",
    timezones: "Fuso Horario",
    flag: "Link da Bandeira",
  };

  var itemsNotFormatted = data;

  var itemsFormatted = [];

  //Format Data
  itemsNotFormatted.forEach((item) => {
    itemsFormatted.push({
      name: item.name.official,
      nativeName: item.name.nativeName?.eng?.common[0] ?? "Nenhum",
      region: item.region,
      subregion: item.subregion ?? "Nenhum",
      population: item.population,
      area: item.area,
      timezones: item.timezones[0],
      flag: item.flags?.png,
    });
  });

  exportCSVFile(headers, itemsFormatted, "paises");
}

function exportCSVFile(headers, items, fileTitle) {
  if (headers) {
    items.unshift(headers);
  }

  // Convert Object to JSON
  var jsonObject = JSON.stringify(items);

  var csv = convertToCSV(jsonObject);

  var exportedFilenmae = fileTitle + ".csv" || "export.csv";

  var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, exportedFilenmae);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", exportedFilenmae);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

function convertToCSV(objArray) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  var str = "";

  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line != "") line += ",";

      line += array[i][index];
    }

    str += line + "\r\n";
  }

  return str;
}

function OBJtoXML(data) {
  var xml = "";
  for (var prop in data) {
    xml += data[prop] instanceof Array ? "" : "<" + prop + ">";
    if (data[prop] instanceof Array) {
      for (var array in data[prop]) {
        xml += "<" + prop + ">";
        xml += OBJtoXML(new Object(data[prop][array]));
        xml += "</" + prop + ">";
      }
    } else if (typeof data[prop] == "object") {
      xml += OBJtoXML(new Object(data[prop]));
    } else {
      xml += data[prop];
    }
    xml += data[prop] instanceof Array ? "" : "</" + prop + ">";
  }
  var xml = xml.replace(/<\/?[0-9]{1,}>/g, "");
  return xml;
}

export function exportToXML(data) {
  var xmltext = OBJtoXML(data);

  var filename = "paises.xml";

  var blob = new Blob([xmltext], { type: "text/plain" });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
