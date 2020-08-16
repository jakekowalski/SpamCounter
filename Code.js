function countSpam() {
  var email = Session.getActiveUser().getEmail();
  var subject = 'Spam Statistics';
  var date = new Date().toLocaleDateString();
  var body = date + ": # of total spam threads: " + GmailApp.getSpamThreads().length;

  GmailApp.sendEmail(email, subject, body);

  Logger.log(body);
}
