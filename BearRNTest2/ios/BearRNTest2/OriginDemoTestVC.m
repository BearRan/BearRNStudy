//
//  OriginDemoTestVC.m
//  bearT2
//
//  Created by apple on 2017/7/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "OriginDemoTestVC.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface OriginDemoTestVC ()

@end

@implementation OriginDemoTestVC

- (void)viewDidLoad {
  [super viewDidLoad];
  
  [self crateUI];
}

- (void)crateUI
{
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"BearRNTest2"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  self.view = rootView;
}

@end
