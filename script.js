import (index.html)
function playVideo() {
  var modal = document.getElementById('videoModal');
  modal.style.display = 'flex';
}

function closeModal() {
  var modal = document.getElementById('videoModal');
  modal.style.display = 'none';
}

function n() {
  alert("classes did't start")


}

function closeModal() {
  document.getElementById('videoModal').style.display = "none";
  var video = document.querySelector('.video-player');
  video.pause();
  video.currentTime = 0;
}
function l()
{
  alert("measeage sent successfully")
  window.location.reload(index.html)
}
function playVideo(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  var video = document.querySelector(`#${modalId} .video-player`);
  video.pause();
  video.currentTime = 0;
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
  if (event.target.classList.contains('video-modal')) {
      closeModal(event.target.id);
      
  }
}
function downloadFile() {
  h
}
function downloadFile(filePath) {
  // Create a new anchor element
  const a = document.createElement('a');

  // Set the href attribute to the file path
  a.href = filePath;

  // Set the download attribute with the name of the file to be downloaded
  a.download = glow('/').pop();

  // Append the anchor to the body (not visible)
  document.body.appendChild(a);

  // Programmatically click the anchor to trigger the download
  a.click();

  // Remove the anchor from the document
  document.body.removeChild(a);
}
