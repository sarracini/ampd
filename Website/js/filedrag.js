
(function() {
    var fileAdded = 0;
    var totalFile = 0;
	// getElementById
	function $id(id) {
		return document.getElementById(id);
	}


	// output information
	function Output(msg) {
        if(fileAdded = 0){
         m.innerHTML = null;
            fileAdded=1;
        }
		var m = $id("messages");
        var totalFiles = $id("total");
        //totalFiles.innerHTML = 2;
		m.innerHTML = msg + m.innerHTML;
	}


	// file drag hover
	function FileDragHover(e) {
        
		e.stopPropagation();
		e.preventDefault();
		e.target.className = (e.type == "dragover" ? "hover" : "");
	}


	// file selection
	function FileSelectHandler(e) {

		// cancel event and hover styling
		FileDragHover(e);

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
            var fixi = files.length - i;
			ParseFile(f,fixi);
            //totalFile++;
		}

	}


	// output file information
	function ParseFile(file, x) {

		Output(
            "<div style='margin-right:10px; margin-bottom:10px;' class='col-md-2 filewell filewell-sm'><div id='deletePadding'><button onclick='alert('Are you sure you want to delete this item?')' style='border:none; background:none;'><i class='fa fa-times fa-lg' style='color: #ce301b;'></i></button></div></button><a style='color:black' href='http://placehold.it/750x550' data-lightbox='image-1' data-title='This is a caption which the student can upload'><img style='width:100%' src='http://placehold.it/100x100'></a><div class='fileText'> File " + x + "<button data-toggle='modal' data-target='#TextModal' style='float:right; border:none; background:none;'><i class='fa fa-pencil-square-o fa-lg' style='color: #ce301b;'></i></div></div>" 
		);

	}

	// initialize
	function Init() {

		var fileselect = $id("fileselect"),
			filedrag = $id("filedrag"),
			submitbutton = $id("submitbutton");

		// file select
		fileselect.addEventListener("change", FileSelectHandler, false);

		// is XHR2 available?
		var xhr = new XMLHttpRequest();
		if (xhr.upload) {

			// file drop
			filedrag.addEventListener("dragover", FileDragHover, false);
			filedrag.addEventListener("dragleave", FileDragHover, false);
			filedrag.addEventListener("drop", FileSelectHandler, false);
			filedrag.style.display = "block";

			// remove submit button
			submitbutton.style.display = "none";
		}

	}

	// call initialization file
	if (window.File && window.FileList && window.FileReader) {
		Init();
	}


})();