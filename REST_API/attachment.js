module.exports = function(app) {
    
    // Lädt die Attachments eines AppStimmers
    app.get("/attachments/:appStimmerID", function(req, res) {
        // TODO Implement
    });
    
    // Fügt einem AppStimmer ein Attachment hinzu.
    // Der Request bekommt nur die Daten der Datei im Requestbody.
    // Alle restlichen Information, wie der Attachment-Type werden aus den Header-Daten abgeleitet.
    app.post("/attachment/:appStimmerID", function(req, res) {
        
    });
}