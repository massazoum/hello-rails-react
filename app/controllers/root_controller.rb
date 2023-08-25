class RootController < ApplicationController
  class RootController < ApplicationController
    def index
      @random_greeting = Message.all.sample.text
    end
  
    def greeting
      random_greeting = Message.all.sample.text
      render json: { greeting: random_greeting }
    end
  end
end
