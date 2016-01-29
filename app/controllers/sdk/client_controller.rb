class Sdk::ClientController < ApplicationController
  
  def image_simple
    render layout: false
  end

  def imgae_silder
    render layout: false
  end

  def form
    render layout: false
  end

  def imgae_multi
    render layout: false
  end

  def sdk_secrete
   _app_key = "JO2EuA047OrXEkAKEiKGmQ"
   _secret = "GVg9ANY2NxMauWC12ZtjPw"
   _timestamp = "#{Time.now.to_i}000" 
   str = "app_key=#{_app_key}&timestamp=#{_timestamp}&secret=#{_secret}"
   digest = OpenSSL::Digest.new('sha1')
   en_str = OpenSSL::HMAC.hexdigest(digest, _secret, str)

   data = {
    app_key: _app_key,
    timestamp: _timestamp,
    sign: en_str
   }
   cookies[:_xrk_ad_js_ticket] = { value: data, :expires => 5.minute.from_now }.to_json
   render layout: false
  end


end
